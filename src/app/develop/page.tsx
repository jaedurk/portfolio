import '/public/styles/develop.scss';
import Link from "next/link";
import ImageGallery from "@/app/component/image-gallery";
import type {DevelopItem} from "@/types/portfolio";

function ProjectCard({item}: {item: DevelopItem}) {
    return (
        <li>
            <p>
                <ImageGallery images={item.images} alt={item.name}
                              width={360} height={741}
                              imageClassName={item.images.length === 0 ? 'no-image' : undefined}/>
            </p>
            <div>
                <p className="project-name">{item.name}</p>
                <p>기간 : {item.period}</p>
                <p className="skills">기술 스택 : {item.skills.map((skill, skillIndex) => {
                    return <span key={skillIndex}>{skill}</span>
                })}</p>
                <ul>주요 업무 {item.detail.map((detailItem, detailIndex) => {
                    return <li key={detailIndex}>{detailItem}</li>
                })}</ul>
                <p>기여도 : {item.contribution}%</p>
                {item.url && (<p>URL : <Link href={item.url} target="_blank">{item.url}</Link></p>)}
            </div>
        </li>
    );
}

export default async function Develop() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/develop`, {cache: 'no-store'});
    const developList: DevelopItem[] = ((await response.json()) as DevelopItem[]).sort((a, b) => b.id - a.id); //내림차순

    const featured = developList.filter((item) => item.featured);
    const rest = developList.filter((item) => !item.featured);

    return (
        <section className="front">
            {featured.length > 0 && (
                <div className="section-block">
                    <header className="section-head">
                        <h2>대표 프로젝트</h2>
                        <p>실시간 통신과 3D 모델링 연동 등, 직접 설계하고 구현한 작업입니다.</p>
                    </header>
                    <ul>
                        {featured.map((item) => <ProjectCard key={item.id} item={item}/>)}
                    </ul>
                </div>
            )}

            <div className="section-block">
                <header className="section-head">
                    <h2>전체 프로젝트</h2>
                    <p>{rest.length}건 · 최신순</p>
                </header>
                <ul>
                    {rest.map((item) => <ProjectCard key={item.id} item={item}/>)}
                </ul>
            </div>
        </section>
    )
}
