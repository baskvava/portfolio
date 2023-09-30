"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const buttons = [
  { name: "About" },
  { name: "Tech Stack" },
  { name: "Experience" },
  { name: "Education" },
  { name: "Project" },
];

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ul className="flex gap-4 text-text">
        {buttons.map(({ name }) => (
          <li key={name}>
            <button className="tab" onClick={() => {}}>
              {name}
            </button>
          </li>
        ))}
      </ul>
      <div className="theme flex justify-center">
        {theme === "light" ? (
          <button className="pr-6 pl-6" onClick={() => setTheme("dark")}>
            <MdDarkMode size="1.5em" />
          </button>
        ) : (
          <button className="pr-6 pl-6" onClick={() => setTheme("light")}>
            <MdLightMode size="1.5em" />
          </button>
        )}
      </div>
    </>
  );
};

export default ThemeButton;
