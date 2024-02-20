import '/public/styles/develop.scss';

export default async function Develop() {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'front', {cache: 'no-store'});
    const developList = await response.json();

    return (
        <section className="front">
            <ul>
                {developList.map((developItem) => {
                    return <li key={developItem.id}>
                        <div>
                            <p>프로젝트명 : {developItem.name}</p>
                            <p>기간 : {developItem.period}</p>
                            <p className="skills">사용기술 : {developItem.skills.map((skillList, skillIndex) => {
                                return <span key={skillIndex}>{skillList}</span>
                            })}</p>
                            <ul>상세내용 {developItem.detail.map((detailList, detailIndex) => {
                                return <li key={detailIndex}>{detailList}</li>
                            })}</ul>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
