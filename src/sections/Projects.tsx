import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
    const projectsData = [
        {
            image: "/project1.png",
            projectName: "PeakTrade",
            projectLink: "https://peaktrade.onrender.com/",
            projectDescription:
                "PeakTrade was designed out of a desire to create a fullstack platform that combines the fun of stock market simulation with the social aspect of friendly competition among users with group functionality.",
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
                "Hangers Academy is the result of a collaborative group effort in designing a realtime chat-based fullstack application that offers servers, text channels, and direct messaging.",
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
                "Airclone is a fullstack vacation rental platform that provides a tool for hosts to list and manage their properties with an integrated review system.",
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
        <div className="projects" id="projects">
          <motion.div
            className="title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <h2>Some Things I’ve Built</h2>
          </motion.div>
          <div className="projects-container">
            {projectsData.map(
              ({
                image,
                projectDescription,
                projectLink,
                projectExternalLinks,
                projectName,
                projectTech,
              }) => {
                return (
                  <motion.div
                    className="project"
                    key={projectName}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={{
                      visible: { opacity: 1, y: -50 },
                      hidden: { opacity: 0, y: 0 },
                    }}
                  >
                    <div className="project-image">
                      <div className="project-image-overlay"></div>
                      <div className="project-image-container">
                        <Image src={image} fill alt={projectName} quality={100} />
                      </div>
                    </div>
                    <div className="project-info">
                      <p className="project-info-overline">Featured Project</p>
                      <Link href={projectLink} className="project-info-title" target='_blank'>{projectName}</Link>
                      <div className="project-info-description">
                        <p>{projectDescription}</p>
                      </div>
                      <ul className="project-info-tech-list">
                        {projectTech.map((tech) => (
                          <li className="project-info-tech-list-item" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <ul className="project-info-links">
                        <li className="project-info-links-item">
                          <Link
                            href={projectExternalLinks.github}
                            className="project-info-links-item-link"
                            target='_blank'
                          >
                            <FiGithub />
                          </Link>
                        </li>
                        <li className="project-info-links-item">
                          <Link
                            href={projectExternalLinks.externalLink}
                            className="project-info-links-item-link"
                            target='_blank'
                          >
                            <FiExternalLink />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      );
}

export default Projects