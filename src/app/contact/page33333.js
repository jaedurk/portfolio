'use client';

import { useState } from 'react';

export default function Home() {
    const [formData, setFormData] = useState({
        subject: '',
        from: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // API 호출
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log('response : ', response);
        if (response.ok) {
            console.log('Email sent successfully');
            // 성공 시 원하는 동작 수행
        } else {
            console.error('Failed to send email');
            // 실패 시 에러 처리
        }
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    subject:
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
                </label>
                <br />
                <label>
                    from:
                    <input type="email" name="from" value={formData.from} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}