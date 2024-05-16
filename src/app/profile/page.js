import '/public/styles/profile.scss';
import Image from "next/image";

export default function Profile() {
    return (
        <section className="profile">
            <Image src="/images/profile-image.jpg" alt="Profile" width={206} height={291} className="profile-image"/>
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
                                Web Browsing, Responsive Web
                            </li>
                            <li>Front-end : HTML, CSS, Vanilla JS, jQuery, React, Next.js, Socket.IO</li>
                            <li>Version Control : svn, git</li>
                            <li>Communication : Jira, Confluence, Zeplin, Figma</li>
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
                <dl>
                    <dt>Education :</dt>
                    <dd>
                        <ul>
                            <li>교육기관 : 티아이에스정보기술교육센터학원<br/>교육내용 : Vue.js와 React.js를 활용한 프론트엔드 웹개발 실무 과정<br/>기간 - 2020.05.16 ~ 2020.06.20</li>
                            <li>교육기관 : 멀티캠퍼스<br/>교육내용 : HTML5 개요 및 모바일 디바이스와의 관계(반응형웹, jQuery Mobile)<br/>기간 - 2015.03.02 ~ 2015.03.06</li>
                            <li>교육기관 : 국제인재능력개발원 <br/> 교육내용 : 퍼블리싱(웹접근성&웹표준, - HTML5 & CSS3, Javascript, jQuery, CrossBrowsing, 포토샵 CS5)<br/>기간 - 2015.03.02 ~ 2015.03.06</li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </section>
    )
}
