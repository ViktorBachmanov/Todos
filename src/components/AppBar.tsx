import React from "react";
import NavBar from "./NavBar";
import LightMode from "./LightMode";

export default function AppBar() {
  return (
    <div className="AppBar">
      <NavBar />

      <a
        className="GitHubLink"
        href="https://todos-viktorbachmanov.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <LightMode />
    </div>
  );
}
