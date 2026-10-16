import '/public/styles/develop.scss';
import Link from "next/link";
import ImageGallery from "@/app/component/image-gallery";
import type {DevelopItem} from "@/types/portfolio";

export default async function Develop() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/develop`, {cache: 'no-store'});
    // const developList: DevelopItem[] = await response.json(); //오름차순
    const developList: DevelopItem[] = ((await response.json()) as DevelopItem[]).sort((a, b) => b.id - a.id); //내림차순

    return (
        <section className="front">
            <ul>
                {developList.map((developItem) => {
                    return <li key={developItem.id}>
                        <p>
                            <ImageGallery images={developItem.images} alt={developItem.name}
                                          width={360} height={741}
                                          imageClassName={developItem.images.length === 0 ? 'no-image' : undefined}/>
                        </p>
                        <div>
                            <p>{developItem.name}</p>
                            <p>기간 : {developItem.period}</p>
                            <p className="skills">사용기술 : {developItem.skills.map((skillList, skillIndex) => {
                                return <span key={skillIndex}>{skillList}</span>
                            })}</p>
                            <ul>상세내용 {developItem.detail.map((detailList, detailIndex) => {
                                return <li key={detailIndex}>{detailList}</li>
                            })}</ul>
                            <p>기여도 : {developItem.contribution}%</p>
                            {developItem?.url && (<p>URL : <Link href={developItem?.url} target="_blank">{developItem?.url}</Link></p>)}
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
