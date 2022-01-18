import React from "react";
import { useState } from "react";
import CheckMark from "../images/icon-check.svg";

function CheckButton({ toggleComplete }) {
  return (
    <div className="button-area">
      <button onClick={toggleComplete}></button>
    </div>
  );
}

export default CheckButton;
