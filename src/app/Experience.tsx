"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";

const companies = [
  {
    compnayName: "Fortinet",
    title: "Web Developer",
    time: "Jan, 2023 - Now",
    description: [
      <>
        Led a successful redesign of a React project, leveraging Redux Toolkit,
        resulting in an{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          impressive 80% reduction in development time
        </span>{" "}
        and significantly improved maintenance efficiency.
      </>,
      <>
        Drove regular code review sessions, providing actionable feedback that
        led to{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          reduction in bugs and enhanced codebase stability.
        </span>
      </>,
      <>
        <span className="underline decoration-wavy decoration-primary text-accent">
          Led a cross-functional team{" "}
        </span>
        in overhauling a legacy Angular project into a performant React
        application. Integrated Webpack, Prettier, ESLint, and StyleLint,
        resulting in reduction in bundle size and improvement in initial load
        times.
      </>,
    ],
  },
  {
    compnayName: "Meta (Facebook)",
    title: "Front End Engineer Intern",
    time: "May, 2022 - Aug, 2022",
    description: [
      <>
        Built Ads entry point on Facebook, involving{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          over 100 thousands of users
        </span>
        . Built an A/B testing of Ads entry point feature to collect of
        increasing conversion rate
      </>,
      <>
        Refactored dialog reactions header bar with Relay to improve data
        retrieve performance, involving
        <span className="underline decoration-wavy decoration-primary text-accent">
          {" "}
          all Facebook users
        </span>
        .
      </>,
    ],
  },
  {
    compnayName: "Lucid",
    title: "Senior Front End Enginner",
    time: "Dec, 2021 - Jul, 2022",
    description: [
      <>
        Improved user experience by supporting autoplay previews and enabling
        draggable segments trained AI model for e-commerce with http live
        streaming (hls) and React.js
      </>,
      <>
        Earned totally{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          over $1,000/month income{" "}
        </span>{" "}
        by contracting with 1 company and building MVP mockup responsive
        websites for them in merely 6 months
      </>,
    ],
  },
  {
    compnayName: "Garmin",
    title: "Engineer Staff II",
    time: "Aug, 2017 - Aug, 2019",
    description: [
      <>
        Built the web application that supports{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          over 1 million users
        </span>{" "}
        to access their activity routes reliably
      </>,
      <>
        Migrated 14 Asia countries historical data{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          over 700 million records{" "}
        </span>
        from MSSQL to MySQL
      </>,
      <>
        <span className="underline decoration-wavy decoration-primary text-accent">
          Reduced 100% of manual migration time
        </span>{" "}
        of users activity data from 14 countries by synchronization cron jobs
        (Java, Spring Boot, MySQL)
      </>,
    ],
  },
];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [selected, setSelected] = useState<string>("Fortinet");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log({ entry });
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
          {companies.map(({ compnayName, title, time }, idx) => (
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
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  ) : (
                    <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                  )}
                </div>
              </div>
              {/* line */}
              {idx < companies.length - 1 && (
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
            {companies.map(({ compnayName, time, title, description }) => (
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
