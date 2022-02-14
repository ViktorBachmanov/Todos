import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";

export default function Layout() {
  return (
    <div className="Layout dark:bg-zinc-900">
      <AppBar />

      <Outlet />
    </div>
  );
}
