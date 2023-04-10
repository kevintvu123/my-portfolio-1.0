import React from 'react'
import Button from '@/components/Button'
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className='hero'>
            <motion.h1
                className='hero-title'
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6,
                }}
            >
                Hi my name is
            </motion.h1>
            <motion.h2
                className='hero-title-large'
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.75,
                }}
            >
                Kevin Vu
            </motion.h2>
            <motion.h3
                className='hero-title-large hero-title-sub'
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.05,
                }}
            >
                Fullstack Software Developer
            </motion.h3>
            <motion.p
                className='hero-text'
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.35,
                }}
            >
                I have experience with building dynamic and scalable web applications using JavaScript/Typescript, Python, React/Redux, SQL, HTML/CSS and more! I love the battle of developing an idea into existence, and forging the bridge between conceptualization and a tangible product while delivering a seamless user experience.
            </motion.p>
            <motion.div
                className="hero-button"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.65,
                }}
            >
                <Button text="Check Out My Resume!" link="https://kevintvu.me/resume.pdf" />
            </motion.div>
        </div>
    )
}

export default Hero