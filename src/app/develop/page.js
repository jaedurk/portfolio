import '/public/styles/develop.scss';
import Image from "next/image";
import Link from "next/link";

export default async function Develop() {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/develop', {cache: 'no-store'});
    // const developList = await response.json(); //오름차순
    const developList = (await response.json()).sort((a, b) => b.id - a.id); //내림차순

    return (
        <section className="front">
            <ul>
                {developList.map((developItem) => {
                    return <li key={developItem.id}>
                        <p><Image className={!developItem.imageUrl && 'no-image'}
                            src={developItem.imageUrl ? developItem.imageUrl : '/images/no-img.jpg'}
                            alt={developItem.name} width={360} height={741}
                            style={{width: "360px", height: "auto"}}/>
                            {developItem?.imageUrl2 && (
                                <Image className={!developItem.imageUrl && 'no-image'}
                                   src={developItem.imageUrl2 ? developItem.imageUrl2 : '/images/no-img.jpg'}
                                   alt={developItem.name} width={360} height={741}
                                   style={{width: "360px", height: "auto", marginTop: "10px"}}/>
                            )}
                        </p>
                        <div>
                            <p>프로젝트명 : {developItem.name}</p>
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
