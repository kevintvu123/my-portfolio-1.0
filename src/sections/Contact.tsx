import React from 'react'
import Button from '@/components/Button'

function Contact() {
    return (
        <div className="contact" id="contact">
            <h2 className='contact-title'>What's Next?</h2>
            <h2 className="contact-sub-title">Get in Touch</h2>
            <p className="contact-text">My inbox is always open. Whether you have an opportunity, question, or just want to say hi. I'll get back to you as soon as possible. Thank you!</p>
            <div className="contact-cta">
                <Button text="Say Hello" link="mailto:kevintvu123@gmail.com"/>
            </div>
        </div>
    )
}

export default Contact