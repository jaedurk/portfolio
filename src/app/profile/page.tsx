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
                            <li>Front-end : HTML, CSS, Vanilla JS, jQuery, React, Next.js, Socket.IO, Three.js</li>
                            <li>Version Control : svn, git</li>
                            <li>Communication : Jira, Confluence, Zeplin, Figma</li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>Career :</dt>
                    <dd>
                        <ul>
                            <li>퓨쳐누리 : 2014.08 ~ 2020.08
                                <ul>
                                    <li>담당업무 : 도서관 홈페이지 및 관리자 템플릿, 솔루션, 관리자 UI 퍼블리싱</li>
                                    <li>이직사유 : 프론트엔드 개발자 직종 변환</li>
                                </ul>
                            </li>
                            <li>제이슨그룹 : 2020.08 ~ 2024.08
                                <ul>
                                    <li>담당업무 : 3종앱/웹(공구마켓, 심쿵할인, 할인중독) 신규 서비스 프론트엔드 개발 및 유지보수</li>
                                    <li>이직사유 : 당사 경영악화 및 인력감축</li>
                                </ul>
                            </li>
                            <li>주식회사 비엠씨 : 2024.08 ~ 2026.08
                                <ul>
                                    <li>담당업무 : 웹사이트 사용자/관리자 퍼블리싱 및 프론트엔드 개발, 전자 카탈로그 퍼블리싱</li>
                                    <li>이직사유 : 사업자 변경에 따른 소속 변경</li>
                                </ul>
                            </li>
                            <li>알엠아이 주식회사 : 2026.08 ~ 2026.10
                                <ul>
                                    <li>담당업무 : 웹사이트 사용자/관리자 퍼블리싱 및 프론트엔드 개발</li>
                                    <li>사직사유 : 당사 경영악화에 따른 권고사직</li>
                                </ul>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>Education :</dt>
                    <dd>
                        <ul>
                            <li>교육기관 : 티아이에스정보기술교육센터학원<br/>교육내용 : Vue.js와 React.js를 활용한 프론트엔드 웹개발 실무 과정<br/>기간 - 2020.05.16 ~ 2020.06.20</li>
                            <li>교육기관 : 멀티캠퍼스<br/>교육내용 : HTML5 개요 및 모바일 디바이스와의 관계(반응형웹, jQuery Mobile)<br/>기간 - 2015.03.02 ~ 2015.03.06</li>
                            <li>교육기관 : 국제인재능력개발원 <br/> 교육내용 : 퍼블리싱(웹접근성&웹표준, - HTML5 & CSS3, Javascript, jQuery, CrossBrowsing, 포토샵 CS5)<br/>기간 - 2013.09 ~ 2014.01</li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </section>
    )
}
