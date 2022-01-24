import React from "react";

function Header({ src, changeTheme }) {
  return (
    <div className="header-area">
      <h1>TODO</h1>
      <button onClick={changeTheme}>
        <img src={src} alt="theme-icon" />
      </button>
    </div>
  );
}

export default Header;
