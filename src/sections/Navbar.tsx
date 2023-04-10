import Link from "next/link"
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo"
import Button from "@/components/Button";

function Navbar() {
  const sectionLinks = [
    { name: "Skills", link: "/#skills" },
    { name: "Projects", link: "/#projects" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const [navbarVisible, setNavbarVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset>100 ? setNavbarVisible(true) : setNavbarVisible(false);
    })
  }, [])

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <div className="brand">
          <Link href="https://kevintvu.me">
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {
              sectionLinks.map(({ name, link }) => (
                <li key={name} className="nav-items-list-item">
                  <Link href={link} className="nav-items-list-item-link">
                    {name}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className="nav-items-button">
            <Button text="Resume" link="http://localhost:3000/resume.pdf"/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar