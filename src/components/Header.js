import React from "react";
import { StateTest } from "./StateTest";
import SunIcon from "../images/icon-sun.svg";
import MoonIcon from "../images/icon-moon.svg";

function Header() {
  const toggledTheme =
    localStorage.getItem("theme") || localStorage.setItem("theme", "day");
  const [theme, setTheme, changeTheme] = StateTest(toggledTheme);

  return (
    <div className="header-area">
      <h1>TODO</h1>
      <button onClick={changeTheme}>
        <img
          src={theme === "night" ? SunIcon : MoonIcon}
          alt="theme-icon"
        ></img>
      </button>
    </div>
  );
}

export default Header;
