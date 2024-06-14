import '/public/styles/develop.scss';
import Image from "next/image";

export default async function Develop() {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/develop', {cache: 'no-store'});
    const developList = await response.json();

    return (
        <section className="front">
            <ul>
                {developList.map((developItem) => {
                    return <li key={developItem.id}>
                        <p><Image className={!developItem.imageUrl && 'no-image'}
                            src={developItem.imageUrl ? developItem.imageUrl : '/images/no-img.jpg'}
                            alt={developItem.name} width={360} height={741}/></p>
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
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
