"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import { experience } from "../../../portfolio.config";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [selected, setSelected] = useState<string>("Fortinet");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-16 md:mt-36">
      <h3 className="text-2xl xl:text-4xl font-mono mb-10 xl:mb-20">
        Experience
      </h3>
      <div
        ref={timelineRef}
        className="flex flex-col xl:flex-row items-center w-full"
      >
        {/* time line */}
        <FadeIn
          className="w-full overflow-x-scroll xl:overflow-hidden xl-8 xl:mb-0 xl:w-80 flex flex-row xl:flex-col"
          delay={500}
          visible={isIntersecting}
        >
          {experience.map(({ compnayName, title, time }, idx) => (
            <div
              className="flex flex-col items-end justify-end h-full xl:h-fit"
              key={compnayName}
            >
              {/* company discription & dot */}
              <div className="flex items-center justify-center">
                {/* company discription */}
                <button
                  className={[
                    "text-start",
                    "xl:text-end",
                    "mr-0",
                    "xl:mr-6",
                    "px-4",
                    "py-2",
                    "font-mono",
                    "border-2",
                    "rounded",
                    "hover:border-primary",
                    "hover:border-dashed",
                    `${
                      selected === compnayName
                        ? "border-primary"
                        : "border-background"
                    }`,
                    `${selected === compnayName && "border-dashed"}`,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setSelected(compnayName)}
                >
                  <div className="text-lg text-accent">{compnayName}</div>
                  <div className="hidden xl:flex text-sm">{title}</div>
                </button>
                {/* dot */}
                <div className="hidden xl:flex items-center justify-center w-7 h-7">
                  {/* <span className="inline-block w-4 h-4 bg-primary rounded-full"></span> */}
                  {selected === compnayName ? (
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-accent"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                  ) : (
                    <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                  )}
                </div>
              </div>
              {/* line */}
              {idx < experience.length - 1 && (
                <span className="hidden xl:inline-block w-1 h-16 bg-primary mr-3"></span>
              )}
            </div>
          ))}
        </FadeIn>
        {/* contnet */}
        <FadeIn
          className="w-full xl:w-3/5 px-4 xl:pl-24 xl:pr-32"
          delay={2200}
          visible={isIntersecting}
        >
          <div className="flex flex-col items-start">
            {experience.map(({ compnayName, time, title, description }) => (
              <section key={compnayName}>
                {selected === compnayName && (
                  <>
                    <h5>
                      <span className="text-lg text-accent mr-4">
                        {compnayName}
                      </span>
                      <span className="mr-4 xl:mr-0 xl:hidden">{title}</span>
                      <span>{time}</span>
                    </h5>
                    <ul className="list-outside list-disc leading-relaxed text-lg mt-4">
                      {description?.map((content, idx) => (
                        <li key={idx} className="mb-4">
                          {content}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
