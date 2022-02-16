import React from "react";
import NavBar from "./NavBar";
import LightMode from "./LightMode";

export default function AppBar() {
  return (
    <div className="AppBar">
      <NavBar />

      <LightMode />
    </div>
  );
}
