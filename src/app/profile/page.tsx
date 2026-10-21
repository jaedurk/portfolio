import '/public/styles/profile.scss';
import Image from "next/image";

export default function Profile() {
    return (
        <section className="profile">
            <div className="profile-intro">
                <Image src="/images/profile-image.jpg" alt="Profile" width={206} height={291} className="profile-image"/>
                <div className="profile-summary">
                    <h2>이재덕 <span>Frontend Developer</span></h2>
                    <p className="lead">
                        웹 퍼블리셔로 6년, 프론트엔드 개발자로 6년. 도서관·커머스·기업 웹사이트까지
                        <strong> 75개 프로젝트</strong>를 맡아 왔습니다.
                    </p>
                    <p className="lead">
                        웹접근성과 반응형을 지킨 마크업을 기본으로, <strong>Three.js 3D 모델링 연동</strong>과
                        <strong> Socket.IO 실시간 기능</strong>처럼 손이 많이 가는 인터랙션을 직접 구현해 왔습니다.
                        관리자 CRUD 화면과 API 연동까지 혼자 끌고 가는 작업에 익숙합니다.
                    </p>
                    <ul className="profile-stats">
                        <li><strong>12년</strong><span>총 경력</span></li>
                        <li><strong>75개</strong><span>프로젝트</span></li>
                        <li><strong>9개</strong><span>Three.js 3D 연동</span></li>
                    </ul>
                </div>
            </div>

            <div className="profile-detail">
                <dl>
                    <dt>생년월일</dt>
                    <dd>1988. 01. 22</dd>
                </dl>
                <dl>
                    <dt>E-mail</dt>
                    <dd><a href="mailto:jaedurk33@gmail.com">jaedurk33@gmail.com</a></dd>
                </dl>
                <dl>
                    <dt>학력</dt>
                    <dd>단국대학교(천안) 경영정보학 전공</dd>
                </dl>
                <dl>
                    <dt>Skills</dt>
                    <dd>
                        <div className="skill-group">
                            <h3>주력</h3>
                            <ul className="skill-tags">
                                <li>HTML5</li>
                                <li>CSS3 / SCSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Three.js</li>
                                <li>반응형 웹</li>
                                <li>웹접근성</li>
                            </ul>
                        </div>
                        <div className="skill-group">
                            <h3>사용 경험</h3>
                            <ul className="skill-tags sub">
                                <li>Socket.IO</li>
                                <li>Axios</li>
                                <li>GSAP</li>
                                <li>Quill.js</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>PHP CI4</li>
                            </ul>
                        </div>
                        <div className="skill-group">
                            <h3>협업</h3>
                            <ul className="skill-tags sub">
                                <li>Git / SVN</li>
                                <li>Jira</li>
                                <li>Confluence</li>
                                <li>Figma</li>
                                <li>Zeplin</li>
                            </ul>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>Career</dt>
                    <dd>
                        <ul className="history">
                            <li>
                                <p className="history-head">알엠아이 주식회사 <span>2026.08 ~ 2026.10</span></p>
                                <p>웹사이트 사용자/관리자 퍼블리싱 및 프론트엔드 개발</p>
                            </li>
                            <li>
                                <p className="history-head">주식회사 비엠씨 <span>2024.08 ~ 2026.08</span></p>
                                <p>웹사이트 사용자/관리자 퍼블리싱 및 프론트엔드 개발, 전자 카탈로그 퍼블리싱</p>
                            </li>
                            <li>
                                <p className="history-head">제이슨그룹 <span>2020.08 ~ 2024.08</span></p>
                                <p>3종앱/웹(공구마켓, 심쿵할인, 할인중독) 신규 서비스 프론트엔드 개발 및 유지보수</p>
                            </li>
                            <li>
                                <p className="history-head">퓨쳐누리 <span>2014.08 ~ 2020.08</span></p>
                                <p>도서관 홈페이지 및 관리자 템플릿, 솔루션, 관리자 UI 퍼블리싱</p>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>Education</dt>
                    <dd>
                        <ul className="history">
                            <li>
                                <p className="history-head">티아이에스정보기술교육센터학원 <span>2020.05 ~ 2020.06</span></p>
                                <p>Vue.js와 React.js를 활용한 프론트엔드 웹개발 실무 과정</p>
                            </li>
                            <li>
                                <p className="history-head">멀티캠퍼스 <span>2015.03</span></p>
                                <p>HTML5 개요 및 모바일 디바이스와의 관계(반응형웹, jQuery Mobile)</p>
                            </li>
                            <li>
                                <p className="history-head">국제인재능력개발원 <span>2013.09 ~ 2014.01</span></p>
                                <p>퍼블리싱(웹접근성 &amp; 웹표준, HTML5 &amp; CSS3, JavaScript, jQuery, CrossBrowsing, 포토샵 CS5)</p>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </section>
    )
}
