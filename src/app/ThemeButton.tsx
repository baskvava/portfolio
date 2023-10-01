"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
  );
};

export default ThemeButton;
