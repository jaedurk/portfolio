'use client';

import '/public/styles/contact.scss';
import {useState} from "react";

export default function Contact() {
    const [isLength1, setIsLength1] = useState(false);
    const [isLength2, setIsLength2] = useState(false);
    const [isLength3, setIsLength3] = useState(false);

    function handleInputChange1(event) {
        if (event.target.value !== '') {
            setIsLength1(true);
        } else {
            setIsLength1(false);
        }
    }

    function handleInputChange2(event) {
        if (event.target.value !== '') {
            setIsLength2(true);
        } else {
            setIsLength2(false);
        }
    }

    function handleInputChange3(event) {
        if (event.target.value !== '') {
            setIsLength3(true);
        } else {
            setIsLength3(false);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!isLength1) {
            alert('이메일을 입력하세요');
            return;
        } else if (!isLength2) {
            alert('제목을 입력하세요.');
            return;
        } else if (!isLength3) {
            alert('내용을 입력하세요');
            return;
        }

        const formData = new FormData(event.target);

        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });

        if (response.ok) {
            alert('메일이 전송되었습니다.');
        } else {
            alert('메일 전송에 실패하였습니다.');
        }
    }

    return (
        <section className="contact">
            <div>
                <h2 className="title">Contact</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <input type="text" name="email" placeholder="메일주소를 입력하세요." onChange={handleInputChange1}/>
                    </div>
                    <div>
                        <input type="text" name="subject" placeholder="제목을 입력하세요." onChange={handleInputChange2}/>
                    </div>
                    <div>
                        <textarea placeholder="내용을 입력하세요." name="message" onChange={handleInputChange3}></textarea>
                    </div>
                    <div className="send-button">
                        <button type="submit">전송</button>
                    </div>
                </form>
            </div>
        </section>
    )
}