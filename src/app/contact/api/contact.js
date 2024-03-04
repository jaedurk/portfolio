import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { name, email, message } = req.body;

    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jaedurk33@gmail.com',
            pass: 'qemi yinl gyts vjwo',
        },
    });

    // 메일 전송 설정
    const mailOptions = {
        from: 'jaedurk33@gmail.com',
        to: 'jaedurk33@gmail.com',
        subject: 'New Inquiry',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        // 메일 전송
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}