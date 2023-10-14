"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import { BsGithub } from "react-icons/bs";
import { projects } from "../../../portfolio.config";

export default function Projects() {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-16 md:mt-64">
      <h3 className="text-2xl md:text-4xl font-mono mb-10 md:mb-20">
        Projects
      </h3>
      <div ref={projectRef}>
        <FadeIn
          className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-12 w-full"
          delay={600}
          visible={isIntersecting}
        >
          {/* card */}
          {projects.map(
            ({ title, url, imgUrl, description, disabled, githubUrl }) => (
              <div
                key={title}
                className="w-full md:w-11/12 overflow-hidden flex flex-col px-4 py-4 rounded-xl outline-offset-1 outline-2 outline-background outline-dashed hover:outline-accent"
              >
                <button
                  className="overflow-hidden border-solid border-0 rounded-t-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(url);
                  }}
                  disabled={disabled}
                >
                  <img
                    className="hover:scale-110 transition hover:delay-300 duration-700 ease-in-out"
                    src={imgUrl}
                  />
                </button>
                {/* info */}
                <div className="overflow-hidden border-solid border-secondary bg-secondary border-l-2 border-r-2 border-b-2 rounded-b-xl">
                  <div className="px-8 py-4">
                    {/* title */}
                    <div className="flex justify-between mb-2">
                      <h5 className="font-mono text-lg text-accent">{title}</h5>
                      {!disabled && (
                        <a
                          href={githubUrl}
                          className="p-0.5 outline-dashed outline-1 outline-offset-2 outline-background hover:outline-accent rounded-full"
                          target="_blank"
                        >
                          <BsGithub size="1.6em" />
                        </a>
                      )}
                    </div>
                    {/* description */}
                    <p className="mr-6">{description}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            )
          )}
        </FadeIn>
      </div>
    </section>
  );
}
