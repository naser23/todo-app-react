import React from "react";

function Header({ src }) {
  return (
    <div className="header-area">
      <h1>TODO</h1>
      <button>
        <img src={src} alt="theme-icon" />
      </button>
    </div>
  );
}

export default Header;
