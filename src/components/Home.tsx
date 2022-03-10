import React, { useState } from "react";
import logo from "../logo.svg";
import Description, { Lang } from "./Description";

export default function Home() {
  const [lang, setLang] = useState(Lang.EN);

  const toggleLang = () => {
    if (lang === Lang.EN) {
      setLang(Lang.RU);
    } else {
      setLang(Lang.EN);
    }
  };

  return (
    <div className="Description">
      <div
        onClick={toggleLang}
        style={{ cursor: "pointer", float: "right" }}
        className="bg-gray-300 dark:bg-neutral-600 p-1"
      >
        {lang}
      </div>

      <img src={logo} alt="logo" className="logo" />

      <Description lang={lang} />
    </div>
  );
}
