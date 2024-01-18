import Image from "next/image";

export default function Profile() {
    return (
        <section className="profile">
            이름 : 이재덕, 생년월일: 1988.01.22
            이메일 : jaedurk33@gmail.com
            학력 : 단국대학교(천안) 경영정보학 전공
            Skills :
            Publish : HTML, CSS, SASS(SCSS), Vanilla JS, jQuery, Bootstrap, Web Accessibility, Cross Web Browsing
            Front-end : HTML, CSS, Vanilla JS, jQuery, React, Next.js, Socket.IO
            Version Control : svn, git
            Communication : Jira, Confluence, Zeplin

            Career : 퓨쳐누리 - 2014.08 ~ 2020.08, 제이슨그룹 2020.08 ~ 재직중

            <div className="profile-image">
                <Image src="/images/profile.jpeg" alt="Profile" width={100} height={140}/>
                <div className="profile-detail">
                    <dl>
                        <dt>이름 :</dt>
                        <dd>이재덕</dd>
                    </dl>
                    <dl>
                        <dt>E-mail :</dt>
                        <dd>jaedurk33@gmail.com</dd>
                    </dl>
                    <dl>
                        <dt>이름 :</dt>
                        <dd>이재덕</dd>
                    </dl>
                </div>
            </div>

        </section>
    )
}
