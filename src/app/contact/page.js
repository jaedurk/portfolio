'use client';

import '/public/styles/contact.scss';

function handleInputChange1() {

}

function handleInputChange2() {

}

async function handleSubmit(event) {
    event.preventDefault();

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

export default function Contact() {
    return (
        <section className="contact">
            <div>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="subject" placeholder="제목을 입력하세요." onChange={handleInputChange1}/>
                </div>
                <div>
                    <input type="text" name="email" placeholder="메일주소를 입력하세요." onChange={handleInputChange2}/>
                </div>
                <div>
                    <textarea placeholder="내용을 입력하세요." name="message"></textarea>
                </div>
                <div>
                    <button type="submit">전송</button>
                </div>
            </form>
            </div>
        </section>
    )
}