import Link from "next/link";
import '/public/styles/publish.scss';
import ImageGallery from "@/app/component/image-gallery";
import type {PublishItem} from "@/types/portfolio";

/** Institutions worth calling out by name in the summary block. */
const HIGHLIGHTS = ['국가전자도서관', '국회도서관', '연세대학교', '통계청', '서울도서관', 'RISS'];

export default async function Publish() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/publish`, {cache: 'no-store'});
    const publishList: PublishItem[] = ((await response.json()) as PublishItem[]).sort((a, b) => b.id - a.id); //내림차순

    return (
        <section className="publish">
            <header className="section-head">
                <h2>퍼블리싱</h2>
                <p className="summary">
                    2014~2020년 도서관·공공기관 전자도서관 시스템을 중심으로
                    <strong> {publishList.length}건</strong>의 사용자/관리자 화면을 퍼블리싱했습니다.
                    대부분 반응형 웹과 웹접근성 기준을 적용했고, 서울도서관 건은 웹접근성 인증마크를 획득했습니다.
                </p>
                <ul className="highlight-tags">
                    {HIGHLIGHTS.map((name) => <li key={name}>{name}</li>)}
                </ul>
            </header>

            <ul>
                {publishList.map((publishItem) => {
                    return <li key={publishItem.id}>
                        <p>
                            <ImageGallery images={publishItem.images} alt={publishItem.name}
                                          width={440} height={295}
                                          imageClassName={publishItem.mobile ? 'mobile' : undefined}/>
                        </p>
                        <div>
                            <p className="project-name">{publishItem.name}</p>
                            <p>담당 업무 : {publishItem.detail}</p>
                            <p>기여도 : {publishItem.contribution}%</p>
                            <p>URL : {publishItem.url ?
                                <Link href={publishItem.url} target="_blank">{publishItem.url}</Link> : 'URL이 변경되었거나 존재하지 않습니다'}</p>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
