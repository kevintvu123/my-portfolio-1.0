import React, { useEffect, useState } from "react";

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    }
    transformSelected();
  }, [selected])
  

  const skills = [
    {
      name: "Programming Languages",
      selectedName: "Programming Languages",
      technologies: [
        "Python",
        "Javascript/Typescript",
        "SQL",
        "HTML",
        "CSS/SCSS"
      ],
    },
    {
      name: "Frameworks",
      selectedName: "Frameworks",
      technologies: [
        "Flask",
        "Express/Node.js",
        "Next.js",
        "Mocha",
        "Pytest",
      ],
    },
    {
      name: "Libraries",
      selectedName: "Libraries",
      technologies: [
        "React",
        "Redux",
        "SQLAlchemy",
        "Sequelize",
        "Socket.io"
      ],
    },
    {
      name: "Databases",
      selectedName: "Databases",
      technologies: [
        "SQLite3",
        "PostgreSQL",
        "MySQL",
      ],
    },
  ];
  return (
    <div
      className="skill"
      id="skills"
    >
      <div className="title">
        <h2>My Skills</h2>
      </div>
      <div className="container">
        <ul className="skill-slider">
          <div className="underline"></div>
          {skills.map((skill, index) => {
            return (
              <li
                className={`skill-slider-item ${
                  index === selected && "skill-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={skill.name}
              >
                <span>{skill.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="skill-details">
          <div className="skill-details-name">
            <h3>
              <span>{skills[selected].selectedName}</span>
            </h3>
            <ul className="skill-details-list">
              {skills[selected].technologies.map(
                (technology, index) => (
                  <li key={index} className="skill-details-list-item">
                    {technology}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;