"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import { AiFillLinkedin } from "react-icons/ai";

export default function About() {
  const feRef = useRef<HTMLHeadingElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    if (feRef.current) {
      observer.observe(feRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-48 text-text tracking-widest">
      <div className="flex gap-x-52 items-end">
        <FadeIn delay={200}>
          <div className="flex items-center">
            <h5 className="mb-2 text-1xl">Hi, I&apos;m</h5>
          </div>
          <div className="flex items-center text-6xl">
            <h3 className="font-bold text-text">a</h3>
            <h3 ref={feRef} className="inline-block text-accent">
              {isIntersecting && (
                <div className="type-out font-mono">Frontend Engineer</div>
              )}
            </h3>
          </div>
          <h3 className="max-w-3xl font-bold text-6xl text-text mb-4 leading-normal">
            making impact web apps to the world
          </h3>
          <p className="max-w-2xl mt-5 mb-2 text-1xl f-icon">
            I&apos;m passionate about the latest front-end technologies and
            trends, and eager to learn new things. Experience on large-scale
            system such as Facebook
          </p>
          <div className="flex items-center">
            <div className="mr-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-accent"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
            </div>
            <a
              className="text-accent font-mono font-bold"
              href="https://www.linkedin.com/in/ying-hsuan-chen1/"
              target="_blank"
            >
              Looking for new Opportunity
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={1200}>
          <div className="relative">
            <img
              className="w-52 h-52 rounded-2xl opacity-90 dark:opacity-70"
              src="https://avatars.githubusercontent.com/u/23297498?v=4"
            />
            <div className="portfolio-text font-mono tracking-widest">
              <button
                className="rounded-md shadow ring-2 ring-accent text-accent"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/ying-hsuan-chen1/");
                }}
              >
                <span className="flex items-center justify-center gap-2 px-4 py-1 whitespace-nowrap">
                  <AiFillLinkedin size="1.2em" />
                  Hire Me
                </span>
                <span className="portfolio-image-ring inline-block absolute">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                </span>
              </button>
            </div>
          </div>
          {/* <div className="portfolio-image w-52 h-52 rounded-2xl">
            <div className="portfolio-text font-mono tracking-widest">
              <button
                className="rounded-md shadow ring-2 ring-text border-text text-text px-6"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/ying-hsuan-chen1/");
                }}
              >
                Hire me
                <span className="portfolio-image-ring inline-block absolute">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                </span>
              </button>
            </div>
          </div> */}
        </FadeIn>
      </div>
    </section>
  );
}
