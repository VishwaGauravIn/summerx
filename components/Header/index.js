import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //   User prefrence is stored in local storage and checked when the component is loaded
  useEffect(() => {
    if (localStorage.getItem("summerx_darklover") === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  function changeTheme() {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("summerx_darklover", false);
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("summerx_darklover", true);
    }
  }
  return (
      <div className="flex flex-row flex-wrap relative items-center">
        <p className="text-3xl font-semibold first-letter:border-dashed">
          SummerX
        </p>
        <button
          className="absolute right-0 active:scale-75 transition-transform ease-in-out"
          onClick={changeTheme}
        >
          {isDarkMode ? (
            <SunIcon className="w-7 stroke-[1.5] mr-0.5" />
          ) : (
            <MoonIcon className="w-7 stroke-[1.5]" />
          )}
        </button>
      </div>
  );
}
