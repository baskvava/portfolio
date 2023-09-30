"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const buttons = [
  { name: "About" },
  { name: "Experience" },
  { name: "Education" },
  { name: "Tech Stack" },
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
      <ul className="flex gap-4">
        {buttons.map(({ name }) => (
          <li key={name}>
            <button className="py-1 px-4 border-2 rounded-full border-background hover:border-accent">
              {name}
            </button>
          </li>
        ))}
      </ul>
      {theme === "light" ? (
        <button className="pr-6 pl-10" onClick={() => setTheme("dark")}>
          <MdDarkMode size="1.5em" />
        </button>
      ) : (
        <button className="pr-6 pl-10" onClick={() => setTheme("light")}>
          <MdLightMode size="1.5em" style={{ color: "#e8fde9" }} />
        </button>
      )}
    </>
  );
};

export default ThemeButton;
