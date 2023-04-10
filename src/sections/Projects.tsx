import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Projects() {
    const projectsData = [
        {
            image: "/project1.png",
            projectName: "PeakTrade",
            projectLink: "https://peaktrade.onrender.com/",
            projectDescription:
                "PeakTrade was designed out of a desire to create a fullstack platform that combines the fun of stock market simulation with the social aspect of friendly competition among users with group functionality",
            projectTech: [
                "React/Redux",
                "Flask",
                "SQLAlchemy",
                "PostgreSQL",
                "Yahoo Finance API",
                "AlphaVantage API",
                "ApexCharts.js"
            ],
            projectExternalLinks: {
                github: "https://github.com/kevintvu123/PeakTrade",
                externalLink: "https://peaktrade.onrender.com/",
            },
        },
        {
            image: "/project2.png",
            projectName: "Hangers Academy",
            projectLink: "https://www.hangersacademy.com/",
            projectDescription:
                "Hangers Academy is the result of a collaborative group effort in designing a realtime chat-based fullstack application that offers servers, text channels, and direct messaging",
            projectTech: [
                "React",
                "Redux Toolkit",
                "Flask",
                "SQLAlchemy",
                "PostgreSQL",
                "Socket.IO",
            ],
            projectExternalLinks: {
                github: "https://github.com/WhirlyFan/Hangers-Academy",
                externalLink: "https://www.hangersacademy.com/",
            },
        },
        {
            image: "/project3.png",
            projectName: "Airclone",
            projectLink: "https://airbnb-api-proj.herokuapp.com/",
            projectDescription:
                "Airclone is a fullstack vacation rental platform that provides a tool for hosts to list and manage their properties with an integrated review system",
            projectTech: [
                "React",
                "Redux Toolkit",
                "Express/Node.js",
                "Sequelize.js",
                "PostgreSQL",
                "HTML/CSS",
            ],
            projectExternalLinks: {
                github: "https://github.com/kevintvu123/AirBnB-Clone",
                externalLink: "https://airbnb-api-proj.herokuapp.com/",
            },
        },
    ];
    return (
        <div className='projects' id='projects'>
            <div className="title">
                <h2>Some Things I&apos;ve Built</h2>
            </div>
        </div>
    )
}

export default Projects