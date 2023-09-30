"use client";

import { useEffect, useRef, useState } from "react";

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

const stacks2 = [];

export default function TechStack() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const techRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      console.log({ entries });
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    if (techRef.current) {
      observer.observe(techRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-36">
      <h3 className="text-4xl font-mono mb-20">Tech Stack</h3>
      <div className="flex items-center w-full">
        <div ref={techRef} className="grid grid-cols-2 gap-x-8 gap-y-8 w-full">
          {stacks.map(({ title, url, percentage }) => (
            <div key={title} className="flex items-center justify-center">
              {/* icon */}
              <div className="flex flex-col justify-center items-center w-28">
                <img title={title} src={url} />
                <h5 className="mt-3">{title}</h5>
              </div>
              {/* bar */}
              <div className="prgoressw-80 mx-8 flex items-center h-4 bg-primary rounded-xl">
                <div
                  className="prgoress"
                  style={{ width: isIntersecting ? percentage : "0" }}
                ></div>
              </div>
              {/* number */}
              <span className="font-serif text-lg tracking-widest">
                {percentage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
