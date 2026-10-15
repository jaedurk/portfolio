'use client';

import '/public/styles/gallery.scss';
import {useCallback, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import Image from "next/image";
import type {CSSProperties} from "react";

const PLACEHOLDER = '/images/no-img.jpg';
/** Minimum horizontal travel (px) before a touch counts as a swipe. */
const SWIPE_THRESHOLD = 50;

interface ImageGalleryProps {
    /** Public image paths. Empty renders a non-clickable placeholder. */
    images: string[];
    alt: string;
    width: number;
    height: number;
    /** Class applied to the thumbnail image. */
    imageClassName?: string;
    /** Inline style applied to the thumbnail image. */
    imageStyle?: CSSProperties;
}

export default function ImageGallery({
    images,
    alt,
    width,
    height,
    imageClassName,
    imageStyle,
}: ImageGalleryProps) {
    const [openedAt, setOpenedAt] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const touchStartX = useRef<number | null>(null);

    const isOpen = openedAt !== null;

    useEffect(() => setMounted(true), []);

    const close = useCallback(() => setOpenedAt(null), []);

    const step = useCallback((delta: number) => {
        setOpenedAt((current) => {
            if (current === null) return current;
            // Wrap around so the slider never dead-ends.
            return (current + delta + images.length) % images.length;
        });
    }, [images.length]);

    // Keyboard controls while the lightbox is open.
    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') close();
            else if (event.key === 'ArrowRight') step(1);
            else if (event.key === 'ArrowLeft') step(-1);
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, close, step]);

    // Lock background scrolling while the lightbox is open.
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    // Move focus into the dialog on open, and back to the thumbnail on close.
    useEffect(() => {
        if (isOpen) dialogRef.current?.focus();
        else triggerRef.current?.focus({preventScroll: true});
    }, [isOpen]);

    function handleTouchStart(event: React.TouchEvent) {
        touchStartX.current = event.touches[0].clientX;
    }

    function handleTouchEnd(event: React.TouchEvent) {
        if (touchStartX.current === null) return;

        const travelled = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;

        if (Math.abs(travelled) < SWIPE_THRESHOLD) return;
        step(travelled < 0 ? 1 : -1);
    }

    // No screenshot: keep the original non-interactive placeholder.
    if (images.length === 0) {
        return <Image className={imageClassName} src={PLACEHOLDER} alt={alt}
                      width={width} height={height} style={imageStyle}/>;
    }

    return (
        <>
            <button type="button" ref={triggerRef} className="gallery-thumb"
                    onClick={() => setOpenedAt(0)}
                    aria-label={`${alt} 이미지 크게 보기${images.length > 1 ? ` (${images.length}장)` : ''}`}>
                <Image className={imageClassName} src={images[0]} alt={alt}
                       width={width} height={height} style={imageStyle}/>
                {images.length > 1 && (
                    <span className="gallery-count" aria-hidden="true">{images.length}</span>
                )}
            </button>

            {mounted && isOpen && createPortal(
                <div className="gallery-overlay" onClick={close}>
                    <div className="gallery-dialog" role="dialog" aria-modal="true" aria-label={alt}
                         tabIndex={-1} ref={dialogRef}
                         onClick={(event) => event.stopPropagation()}
                         onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

                        <button type="button" className="gallery-close" onClick={close} aria-label="닫기">
                            &times;
                        </button>

                        <div className="gallery-stage">
                            <Image key={images[openedAt]} src={images[openedAt]}
                                   alt={`${alt} (${openedAt + 1}/${images.length})`}
                                   fill sizes="100vw" priority
                                   style={{objectFit: 'contain'}}/>
                        </div>

                        {images.length > 1 && (
                            <>
                                <button type="button" className="gallery-nav gallery-prev"
                                        onClick={() => step(-1)} aria-label="이전 이미지">
                                    &#8249;
                                </button>
                                <button type="button" className="gallery-nav gallery-next"
                                        onClick={() => step(1)} aria-label="다음 이미지">
                                    &#8250;
                                </button>
                                <p className="gallery-counter">{openedAt + 1} / {images.length}</p>
                            </>
                        )}
                    </div>
                </div>,
                document.body,
            )}
        </>
    );
}
