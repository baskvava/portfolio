"use client";

import { useEffect, useRef, useState } from "react";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import TechStack from "./techStack";
import ThemeButton from "./themeButton";
import { AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { meta, navbarButtons } from "../../../portfolio.config";

export default function Wrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }
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
    <main className="max-w-8xl w-full max-auto py-5 px-4 md:px-12 md:pt-0">
      <div className="max-w-8xl w-full">
        {/* hamburger menu */}
        <nav
          className={[
            "flex",
            "md:hidden",
            "h-5",
            !isOpen ? "justify-between" : "justify-end",
            "items-center",
            "pt-5",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {!isOpen && (
            <div className="flex flex-col gap-3 justify-start">
              <h5 className="font-mono text-accent text-lg">
                {meta.header?.title}
              </h5>
            </div>
          )}

          <section className="md:hidden flex text-text">
            <div
              className="space-y-2 z-50"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {!isOpen ? (
                <div className="flex items-center justify-center gap-4 text-xs">
                  <div className="relative font-mono tracking-widest">
                    <button
                      className="rounded-md shadow ring-2 ring-primary text-text bg-primary"
                      onClick={() => {
                        window.open(meta.header.actionBtn?.link);
                      }}
                    >
                      {meta.header?.actionBtn && (
                        <span className="flex items-center justify-center gap-2 px-4 py-1 whitespace-nowrap text-sm">
                          {meta.header.actionBtn.icon}
                          {meta.header.actionBtn?.content}
                        </span>
                      )}
                      <span className="portfolio-image-ring inline-block absolute">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                      </span>
                    </button>
                  </div>
                  <ThemeButton />
                  <a
                    href={meta.githubLink}
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
            </div>

            {/* open menu */}
            {isOpen && (
              <div className="absolute left-0 top-0 bg-secondary w-full">
                <ul className="flex flex-col items-center justify-evenly min-h-[250px]">
                  {navbarButtons.map(({ id, name }) => (
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
        <nav className="hidden h-fit md:flex justify-between items-center py-5">
          <h5 className="font-mono text-accent text-lg flex gap-8">
            {meta.header?.title}
          </h5>
          <div className="hidden md:flex">
            <div className="relative font-mono tracking-widest mr-4">
              <button
                className="rounded-md shadow ring-2 ring-primary text-text bg-primary"
                onClick={() => {
                  window.open(meta.header.actionBtn?.link);
                }}
              >
                {meta.header?.actionBtn && (
                  <span className="flex items-center justify-center gap-2 px-4 py-1 whitespace-nowrap text-sm">
                    {meta.header.actionBtn.icon}
                    {meta.header.actionBtn?.content}
                  </span>
                )}
                <span className="portfolio-image-ring inline-block absolute">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                </span>
              </button>
            </div>
            <ul className="flex gap-4 text-text">
              {navbarButtons.map(({ id, name, link }) => (
                <li key={id}>
                  {link ? (
                    <button className="tab" onClick={() => window.open(link)}>
                      {name}
                    </button>
                  ) : (
                    <button className="tab" onClick={() => scroll(id)}>
                      {name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <ThemeButton />
            <a href={meta.githubLink} target="_blank">
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
              {meta?.footer?.links.map(({ link, icon }) => (
                <a key={link} href={link} target="_blank">
                  {icon}
                </a>
              ))}
            </p>
            <p className="flex gap-2">
              {meta?.footer?.copyright}
              {/* {!isLoading && !error && (
                <span className="flex items-center justify-center gap-2">
                  <AiOutlineEye size="1.6em" />
                  {data?.views}
                </span>
              )} */}
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
