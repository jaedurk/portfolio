import '/public/styles/profile.scss';
import Image from "next/image";

export default function Profile() {
    return (
        <section className="profile">
            <Image src="/images/profile.jpeg" alt="Profile" width={100} height={140} className="profile-image"/>
            <div className="profile-detail">
                <dl>
                    <dt>이름</dt>
                    <dd>이재덕</dd>
                </dl>
                <dl>
                    <dt>생년월일</dt>
                    <dd>1988. 01. 22</dd>
                </dl>
                <dl>
                    <dt>E-mail</dt>
                    <dd>jaedurk33@gmail.com</dd>
                </dl>
                <dl>
                    <dt>학력</dt>
                    <dd>단국대학교(천안) 경영정보학 전공</dd>
                </dl>
                <dl>
                    <dt>Skills</dt>
                    <dd>
                        <ul>
                            <li>Publish : HTML, CSS, SASS(SCSS), Vanilla JS, jQuery, Bootstrap, Web Accessibility, Cross
                                Web Browsing
                            </li>
                            <li>Front-end : HTML, CSS, Vanilla JS, jQuery, React, Next.js, Socket.IO</li>
                            <li>Version Control : svn, git</li>
                            <li>Communication : Jira, Confluence, Zeplin</li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>Career :</dt>
                    <dd>
                        <ul>
                            <li>퓨쳐누리 : 2014.08 ~ 2020.08</li>
                            <li>제이슨그룹 : 2020.08 ~ 재직중</li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </section>
    )
}
