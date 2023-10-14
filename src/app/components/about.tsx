"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import { about } from "../../../portfolio.config";

export default function About() {
  const feRef = useRef<HTMLHeadingElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { position, positionDescription, detail, highlight, portfolioImg } =
    about;

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
    <section className="pt-24 pb-0 xl:pt-48 xl:pb-48 text-text tracking-widest">
      <div className="flex flex-col xl:flex-row gap-0 xl:gap-x-52 xl:items-end">
        <FadeIn delay={200} className="mb-12 xl:mb-0">
          <div className="flex items-center">
            <h5 className="mb-2 text-base md:text-1xl">Hi, I&apos;m</h5>
          </div>
          <div className="flex items-center text-2xl sm:text-3xl xl:text-6xl">
            <h3 className="font-bold text-text">a</h3>
            <h3 ref={feRef} className="inline-block text-accent">
              {isIntersecting && (
                <div className="type-out font-mono">{position}</div>
              )}
            </h3>
          </div>
          <h3 className="max-w-3xl font-bold text-2xl sm:text-3xl xl:text-6xl text-text mb-4 leading-normal">
            {positionDescription}
          </h3>
          <p className="max-w-2xl mt-5 mb-2 text-base xl:text-1xl f-icon">
            {detail}
          </p>
          <div className="flex items-center">
            <div className="mr-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-accent"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
            </div>
            {highlight?.content && (
              <a
                className="text-accent font-mono font-bold"
                href={highlight?.url}
                target="_blank"
              >
                {highlight?.content}
              </a>
            )}
          </div>
        </FadeIn>
        {portfolioImg && (
          <FadeIn delay={1200}>
            <div className="relative w-fit">
              <img
                className="w-52 h-52 rounded-2xl opacity-90 dark:opacity-70"
                src={portfolioImg?.imgUrl}
              />
              <div className="portfolio-text font-mono tracking-widest">
                <button
                  className="rounded-md shadow ring-2 ring-accent text-accent"
                  onClick={() => {
                    window.open(portfolioImg?.btnLink);
                  }}
                >
                  {portfolioImg?.actionBtn && (
                    <span className="flex items-center justify-center gap-2 px-4 py-1 whitespace-nowrap">
                      {portfolioImg.actionBtn.icon}
                      {portfolioImg.actionBtn?.content}
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
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
