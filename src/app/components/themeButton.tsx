"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="theme flex justify-center">
      {theme === "light" ? (
        <button
          className="pr-1 md:pr-3 pl-0 md:pl-6"
          onClick={(e) => {
            e.stopPropagation();
            setTheme("dark");
          }}
        >
          <MdDarkMode size="1.5em" />
        </button>
      ) : (
        <button
          className="pr-1 md:pr-3 pl-0 md:pl-6"
          onClick={(e) => {
            e.stopPropagation();
            setTheme("light");
          }}
        >
          <MdLightMode size="1.5em" />
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
