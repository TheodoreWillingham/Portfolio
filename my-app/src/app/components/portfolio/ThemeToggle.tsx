import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme == "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      //adds dark mode to root
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-3 right-3 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden",
        "max-md:static max-md:z-auto max-md:mt-4"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 text-yellow-300"/>
      ) : (
        <Moon className="h-6 text-blue-900"/>
      )}
    </button>
  );
};
