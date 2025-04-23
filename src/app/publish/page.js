import Link from "next/link";
import '/public/styles/publish.scss';
import Image from "next/image";

export default async function Publish() {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/publish', {cache: 'no-store'});
    // const publishList = await response.json(); //오름차순
    const publishList = (await response.json()).sort((a, b) => b.id - a.id); //내림차순

    return (
        <section className="publish">
            <ul>
                {publishList.map((publishItem) => {
                    return <li key={publishItem.id}>
                        <p><Image className={publishItem.mobile && 'mobile'}
                                  src={publishItem.imageUrl ? '/images/publish/' + publishItem.imageUrl : '/images/no-img.jpg'}
                                  alt={publishItem.name} width={440} height={295}/></p>
                        <div>
                            <p>프로젝트명 : {publishItem.name}</p>
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
