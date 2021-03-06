import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "./svg/sun.svg";
import { ReactComponent as Moon } from "./svg/moon.svg";

export default function LightMode() {
  const [lightMode, setLightMode] = useState("light");

  useEffect(() => {
    setLightMode(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const setTheme = (val: "light" | "dark") => {
    if (val === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.theme = val;
    setLightMode(val);
  };

  return (
    <div className="LightMode">
      {lightMode === "dark" ? (
        <Sun onClick={() => setTheme("light")} />
      ) : (
        <Moon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
