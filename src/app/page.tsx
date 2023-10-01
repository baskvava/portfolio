"use client";

import { useEffect, useRef, useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import TechStack from "./TechStack";
import ThemeButton from "./ThemeButton";
import { AiOutlineArrowUp } from "react-icons/ai";

const buttons = [
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "techStack", name: "Tech Stack" },
];

export default function Home() {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log({ entry });
      setIsIntersecting(entry.isIntersecting);
    });
    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const scroll = (id: string) => {
    // const id = e.currentTarget.getAttribute("href").slice(1);
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
    <div className="flex flex-col justify-start bg-background items-center min-h-screen w-full">
      <main className="max-w-8xl w-full max-auto py-5 px-12">
        <div className="max-w-8xl w-full">
          <nav className="h-fit flex justify-between items-center">
            <h5 className="font-mono text-accent text-lg">Clara Chen</h5>
            <div className="flex">
              <ul className="flex gap-4 text-text">
                {buttons.map(({ id, name }) => (
                  <li key={id}>
                    <button className="tab" onClick={() => scroll(id)}>
                      {/* <a href={`#${id}`}> */}
                      {name}
                      {/* </a> */}
                    </button>
                  </li>
                ))}
              </ul>
              <ThemeButton />
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
            <footer className="mt-48 flex items-center justify-center">
              Copyright © ${new Date().getFullYear()} Clara Chen.
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
    </div>
  );
}
