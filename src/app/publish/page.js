import Link from "next/link";
import '/public/styles/publish.scss';

export const getServerSideProps = (async () => {

})

export default function Publish() {
    return (
        <section className="publish">
            <ul>
                <li>
                    <p><Link href="/">대전시통합도서관 작은도서관 도서관리시스템 구축사업</Link></p>
                    <p>메인 및 서브 데코레이터 퍼블리싱</p>
                </li>
            </ul>
        </section>
    )
}
