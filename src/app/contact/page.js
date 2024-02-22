import '/public/styles/contact.scss';
import EmailForm from "@/app/contact/components/EmailForm";

export default function Contact() {
    return (
        <section className="contact">
            <h2>Contact</h2>
            <EmailForm/>
        </section>
    )
}
