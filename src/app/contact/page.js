// import nodemailer from 'nodemailer';
//
// const { email_service, user, pass } = process.env;
//
// const transporter = nodemailer.createTransport({
//     service: email_service,
//     auth: {
//         user: user,
//         pass: pass
//     }
// });
//
// const mailOptions = {
//     from : user,
//     to: user,
//     subject: 'Nodemailer Test',
//     text: '노드 패키지 nodemailer를 이용해 보낸 이메일임'
// };
//
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log('Email Sent : ', info);
//     }
// })

export default function Contact() {
    return (
        <div>
            <div>
                <input type="text" placeholder="제목을 입력하세요."/>
            </div>
            <div>
                <input type="text" placeholder="메일주소를 입력하세요."/>
            </div>
            <div>
                <textarea placeholder="내용을 입력하세요."></textarea>
            </div>
        </div>
    )
}