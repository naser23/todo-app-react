import React from "react";
import moonLogo from "../images/icon-moon.svg";

function Header() {
  return (
    <div className="header-area">
      <h1>TODO</h1>
      <button>
        <img src={moonLogo} alt="moon-icon"></img>
      </button>
    </div>
  );
}

export default Header;
