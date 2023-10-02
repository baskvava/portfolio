"use client";

import { useEffect, useRef, useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import TechStack from "./TechStack";
import ThemeButton from "./ThemeButton";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiOutlineEye,
} from "react-icons/ai";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const buttons = [
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "techStack", name: "Tech Stack" },
];

export default function Wrapper({ views }: { views: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  async function addViews() {
    await fetch(`/portfolio/api/views/1`, {
      method: "PUT",
      body: JSON.stringify({ views: views + 1 }),
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }
    addViews();
    return () => observer.disconnect();
  }, []);

  const scroll = (id: string) => {
    const targetAnchor = document.getElementById(id);
    if (!targetAnchor) {
      return;
    }
    const offsetTop = targetAnchor.getBoundingClientRect().top;
    window.scroll({
      top: offsetTop - 40,
      behavior: "smooth",
    });
  };

  return (
    <main className="max-w-8xl w-full max-auto py-5 px-4 md:px-12">
      <div className="max-w-8xl w-full">
        {/* hamburger menu */}
        <nav
          className={[
            "flex",
            "md:hidden",
            "h-5",
            !isOpen ? "justify-between" : "justify-end",
            "items-center",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {!isOpen && (
            <h5 className="font-mono text-accent text-lg">Clara Chen</h5>
          )}

          <section className="md:hidden flex text-text">
            <button
              className="space-y-2 z-50"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {!isOpen ? (
                <div className="flex items-center justify-center gap-4">
                  <ThemeButton />
                  <a
                    href="https://github.com/baskvava"
                    target="_blank"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <AiFillGithub size="1.6em" />
                  </a>
                  <RxHamburgerMenu size="1.2em" />
                </div>
              ) : (
                <RxCross1 size="1.2em" />
              )}
            </button>

            {/* open menu */}
            {isOpen && (
              <div className="absolute left-0 top-0 bg-secondary w-full">
                <ul className="flex flex-col items-center justify-evenly min-h-[250px]">
                  {buttons.map(({ id, name }) => (
                    <li key={id}>
                      <button
                        className="tab"
                        onClick={() => {
                          scroll(id);
                          setIsOpen(!isOpen);
                        }}
                      >
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </nav>
        {/* normal menu */}
        <nav className="hidden h-fit md:flex justify-between items-center">
          <h5 className="font-mono text-accent text-lg">Clara Chen</h5>
          <div className="hidden md:flex">
            <ul className="flex gap-4 text-text">
              {buttons.map(({ id, name }) => (
                <li key={id}>
                  <button className="tab" onClick={() => scroll(id)}>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <ThemeButton />
            <a href="https://github.com/baskvava" target="_blank">
              <AiFillGithub size="1.6em" />
            </a>
          </div>
        </nav>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div ref={arrowRef}>
          <div id="projects">
            <Projects />
          </div>
          <div id="techStack">
            <TechStack />
          </div>
          <footer className="mt-16 md:mt-48 flex flex-col items-center justify-center">
            <span className="font-mono">Contact With Me</span>
            <p className="flex items-center justify-center gap-4 mb-10 mt-5">
              <a href="https://github.com/baskvava" target="_blank">
                <AiFillGithub size="1.6em" />
              </a>
              <a
                href="https://www.linkedin.com/in/ying-hsuan-chen1/"
                target="_blank"
              >
                <AiFillLinkedin size="1.6em" />
              </a>
            </p>
            <p className="flex gap-2">
              Copyright © ${new Date().getFullYear()} Clara Chen.{" "}
              {/* <span className="flex items-center justify-center gap-2">
                <AiOutlineEye size="1.6em" />
                {views}
              </span> */}
            </p>
          </footer>
        </div>
      </div>
      {/* back to top */}
      {isIntersecting && (
        <button
          className="w-full sticky bottom-14 flex items-end justify-end"
          onClick={() => scroll("about")}
        >
          <div className="animate-bounce bg-background p-2 w-10 h-10 ring-1 ring-accent shadow-lg rounded-full flex items-center justify-center">
            <AiOutlineArrowUp size="1.5em" />
          </div>
        </button>
      )}
    </main>
  );
}
