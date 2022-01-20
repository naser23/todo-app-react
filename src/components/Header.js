import React from "react";

function Header({ changeTheme, Icon }) {
  return (
    <div className="header-area">
      <h1>TODO</h1>
      <button onClick={changeTheme}>
        <img src={Icon} alt="theme-icon"></img>
      </button>
    </div>
  );
}

export default Header;
