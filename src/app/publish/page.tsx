import Link from "next/link";
import '/public/styles/publish.scss';
import ImageGallery from "@/app/component/image-gallery";
import type {PublishItem} from "@/types/portfolio";

export default async function Publish() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/publish`, {cache: 'no-store'});
    // const publishList: PublishItem[] = await response.json(); //오름차순
    const publishList: PublishItem[] = ((await response.json()) as PublishItem[]).sort((a, b) => b.id - a.id); //내림차순

    return (
        <section className="publish">
            <ul>
                {publishList.map((publishItem) => {
                    return <li key={publishItem.id}>
                        <p>
                            <ImageGallery images={publishItem.images} alt={publishItem.name}
                                          width={440} height={295}
                                          imageClassName={publishItem.mobile ? 'mobile' : undefined}/>
                        </p>
                        <div>
                            <p>{publishItem.name}</p>
                            <p>URL : {publishItem.url ?
                                <Link href={publishItem.url}>{publishItem.url}</Link> : 'URL이 변경되었거나 존재하지 않습니다'}</p>
                            <p>직무 : {publishItem.detail}</p>
                            <p>기여도 : {publishItem.contribution}%</p>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
