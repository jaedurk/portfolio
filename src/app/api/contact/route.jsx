import {NextResponse} from 'next/server'

const nodemailer = require('nodemailer');

export async function POST(request) {
    const {EMAIL_SERVICE, AUTH_USER, AUTH_PASS} = process.env;

    console.log("dealing with request");
    const formData = await request.formData();
    const subject = formData.get('subject');
    const email = formData.get('email');
    const message = formData.get('message');

    const transporter = nodemailer.createTransport({
        service: EMAIL_SERVICE,
        auth: {
            user: AUTH_USER,
            pass: AUTH_PASS
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: email,
            to: AUTH_USER,
            subject: subject,
            text: message + '\n\n' + '보낸사람 : ' + email
        });

        return NextResponse.json({message: "Success: email was sent"});

    } catch (error) {
        console.log(error);

        NextResponse.status(500).json({message: "COULD NOT SEND MESSAGE"});
    }
}