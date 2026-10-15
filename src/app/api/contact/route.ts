import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const {EMAIL_SERVICE, AUTH_USER, AUTH_PASS} = process.env;

    console.log("dealing with request");
    const formData = await request.formData();
    const subject = String(formData.get('subject') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');

    const transporter = nodemailer.createTransport({
        service: EMAIL_SERVICE,
        auth: {
            user: AUTH_USER,
            pass: AUTH_PASS
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: AUTH_USER,
            subject: subject,
            text: message + '\n\n' + '보낸사람 : ' + email
        });

        return NextResponse.json({message: "Success: email was sent"});

    } catch (error) {
        // console.log(error);

        return NextResponse.json({message: "COULD NOT SEND MESSAGE"}, {status: 500});
    }
}
