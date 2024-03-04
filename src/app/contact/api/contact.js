import nodemailer from "nodemailer";

export type EmailData = {
    from: string;
    subject: string;
    message: string;
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
    },
});

export async function sendEmail({subject, from, message}: EmailData) {
    const mailData = {
        to: process.env.AUTH_USER,
        subject: `${subject}`,
        from,
        html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    `,
    };

    const info = await transporter.sendMail(mailData);
    console.log("Message sent: %s", info.messageId);

    return info;
}