import Link from "next/link";
import '/public/styles/publish.scss';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Image from "next/image";

export default async function Publish() {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'publish', {cache: 'no-store'});
    const publishList = await response.json();

    return (
        <section className="publish">
            <ul>
                {publishList.map((publishItem) => {
                    return <li key={publishItem.id}>
                        <p><Image src={publishItem.imageUrl ? '/images/publish/' + publishItem.imageUrl : '/images/no-img.jpg'} alt={publishItem.name} width={440}
                                  height={295}/></p>
                        <div>
                            <p>프로젝트명 : {publishItem.name}</p>
                            <p>URL : {publishItem.url ?
                                <Link href={publishItem.url}>{publishItem.url}</Link> : 'URL이 변경되었거나 존재하지 않습니다'}</p>
                            <p>직무 : {publishItem.detail}</p>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
