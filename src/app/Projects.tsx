"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import { BsGithub } from "react-icons/bs";

const cards = [
  {
    title: "Portfolio",
    url: "https://baskvava.github.io/portfolio/",
    githubUrl: "https://github.com/baskvava/portfolio",
    imgUrl: "https://baskvava.github.io/portfolio/portfolio.png",
    disabled: false,
    description: (
      <>
        A high-quality, beautiful portfolio website is visually appealing,
        well-organized
      </>
    ),
  },
  {
    title: "React Video Modal",
    url: "https://baskvava.github.io/react-video-modal/",
    githubUrl: "https://github.com/baskvava/react-video-modal",
    imgUrl: "https://baskvava.github.io/resume/react-video-modal.png",
    disabled: false,
    description: (
      <>
        Lets you focus video. Without wasting time to optimize the modal events.
      </>
    ),
  },
  {
    title: "Facebook Dialog",
    imgUrl: "https://baskvava.github.io/resume/facebook-dialog.png",
    disabled: true,
    description: (
      <>
        Refactor the Facebook Dialog with Relay to improve the data retrieve
        performance
      </>
    ),
  },
];

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
    <section className="mt-64">
      <h3 className="text-4xl font-mono mb-20">Projects</h3>
      <div ref={projectRef}>
        <FadeIn
          className="grid grid-cols-2 gap-y-12 w-full"
          delay={600}
          visible={isIntersecting}
        >
          {/* card */}
          {cards.map(
            ({ title, url, imgUrl, description, disabled, githubUrl }) => (
              <div
                key={title}
                className=" w-11/12 overflow-hidden flex flex-col px-4 py-4 rounded-xl outline-offset-1 outline-2 outline-background outline-dashed hover:outline-accent"
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
                        <a href={githubUrl} target="_blank">
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
