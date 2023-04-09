import Link from "next/link"
import React from 'react'
import {
    FiGithub,
    FiLinkedin
} from "react-icons/fi"
import { FaAngellist } from "react-icons/fa";

function SocialIcons() {
    const socialLinks = [
        {
            name: "Github",
            icon: <FiGithub />,
            link: "https://github.com/kevintvu123"
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            link: "https://www.linkedin.com/in/kevintvu123/",
        },
        {
            name: "Wellfound",
            icon: <FaAngellist />,
            link: "https://wellfound.com/u/kevin-vu-22"
        }
    ];

    return (
        <div className='social-icons'>
            <ul className="social-icons-list">
                {socialLinks.map(({name, icon, link}) => (
                    <li key={name} title={name} className='social-icons-list-item'>
                        <Link
                            href={link}
                            className='social-icons-list-item-link'
                            target='_blank'
                        >
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialIcons