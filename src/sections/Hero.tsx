import React from 'react'
import Button from '@/components/Button'

function Hero() {
    return (
        <div className='hero'>
            <h1 className='hero-title'>
                Hi my name is
            </h1>
            <h2 className='hero-title-large'>
                Kevin Vu
            </h2>
            <h3 className='hero-title-large hero-title-sub'>
                Fullstack Software Developer
            </h3>
            <p className='hero-text'>
                I have experience with building dynamic and scalable web applications using JavaScript/Typescript, Python, React/Redux, SQL, HTML/CSS and more! I love the battle of developing an idea into existence, and forging the bridge between conceptualization and a tangible product while delivering a seamless user experience.
            </p>
            <div className="hero-button">
                <Button text="Check Out My Resume!" link="http://localhost:3000/resume.pdf" />
            </div>
        </div>
    )
}

export default Hero