import React from 'react'
import Button from '@/components/Button'
import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div
            className="contact"
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >
            <h2 className='contact-title'>What&apos;s Next?</h2>
            <h2 className="contact-sub-title">Get in Touch</h2>
            <p className="contact-text">My inbox is always open. Whether you have an opportunity, question, or just want to say hi. I&apos;ll get back to you as soon as possible. Thank you!</p>
            <div className="contact-cta">
                <Button text="Say Hello" link="mailto:kevintvu123@gmail.com" />
            </div>
        </motion.div>
    )
}

export default Contact