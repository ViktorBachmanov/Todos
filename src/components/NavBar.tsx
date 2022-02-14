import React from "react";
import { NavLink } from "react-router-dom";
import { Urls } from "../constants";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <ul style={{ display: "flex" }}>
        <li>
          <NavLink
            to={Urls.HOME}
            className={({ isActive }) =>
              isActive ? "activeNavLink" : "inactiveNavLink"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={Urls.TODOS}
            className={({ isActive }) =>
              isActive ? "activeNavLink" : "inactiveNavLink"
            }
          >
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
