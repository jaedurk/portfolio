
import '/public/styles/develop.scss';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

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
                            <p>Front-end :
                                {developList.skills.map((skillList) => {
                                    return skillList
                                })}
                            </p>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
