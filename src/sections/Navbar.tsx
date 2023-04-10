import React, { useEffect, useState } from "react";
import Link from "next/link"
import Logo from "../components/Logo"
import Button from "@/components/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

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
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100 ? setNavbarVisible(true) : setNavbarVisible(false);
    })
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <div className="brand">
          <Link href="https://kevintvu.me">
            <Logo />
          </Link>
        </div>
        <div className="nav-responsive-toggle">
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </div>
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
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
            <Button text="Resume" link="http://localhost:3000/resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar