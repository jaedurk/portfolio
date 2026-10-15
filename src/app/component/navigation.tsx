'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

interface NavigationProps {
    nav: string[];
}

export default function Navigation(props: NavigationProps) {
    const pathName = usePathname();
    return props.nav.map((navigationName, navigationIndex) => {
        return <li key={navigationIndex} className={`/${navigationName.toLowerCase()}` === pathName ? 'on' : ''}>
            <Link href={navigationName.toLowerCase()}>{navigationName}</Link>
        </li>
    })
}
