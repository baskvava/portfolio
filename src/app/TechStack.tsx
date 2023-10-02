"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";

const stacks = [
  {
    title: "JavaScript",
    url: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    percentage: "100%",
  },
  {
    title: "React.js",
    url: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    percentage: "100%",
  },
  {
    title: "Relay",
    url: "https://www.vectorlogo.zone/logos/facebook_relay/facebook_relay-icon.svg",
    percentage: "80%",
  },
  {
    title: "GraphQL",
    url: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    percentage: "70%",
  },
  {
    title: "Webpack",
    url: "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg",
    percentage: "70%",
  },
  {
    title: "Tailwind CSS",
    url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    percentage: "80%",
  },
  {
    title: "Node JS",
    url: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    percentage: "80%",
  },
  {
    title: "Python",
    url: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    percentage: "80%",
  },
  {
    title: "Redis",
    url: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    percentage: "60%",
  },
  {
    title: "Git",
    url: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    percentage: "90%",
  },
];

export default function TechStack() {
  const techRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [, updateState] = useState<{}>();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    if (techRef.current) {
      observer.observe(techRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    forceUpdate();
  }, [isIntersecting, forceUpdate]);

  return (
    <section className="mt-16 md:mt-64">
      <h3 className="text-2xl md:text-4xl font-mono mb-10 md:mb-20">
        Tech Stack
      </h3>
      <div className="flex items-center w-full">
        <div ref={techRef} className="w-full">
          <FadeIn
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full"
            visible={isIntersecting}
          >
            {stacks.map(({ title, url, percentage }) => (
              <div key={title} className="flex items-center justify-center">
                {/* icon */}
                <div className="flex flex-col justify-center items-center w-28">
                  <img title={title} src={url} className="w-6 md:w-8" />
                  <h5 className="mt-3">{title}</h5>
                </div>
                {/* bar */}
                <div className="prgoress w-80 mx-8 flex items-center h-3 bg-primary rounded-xl">
                  <div
                    className="prgoress-bar"
                    style={{ width: isIntersecting ? percentage : "0" }}
                  ></div>
                </div>
                {/* number */}
                <span className="font-serif text-lg tracking-widest">
                  {percentage}
                </span>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
