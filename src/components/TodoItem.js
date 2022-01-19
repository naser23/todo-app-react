import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import CheckIcon from "../images/icon-check.svg";

function TodoItem({ item, handleDelete }) {
  const listId = uuidv4();

  const completedStyle = {
    textDecoration: "line-through",
    color: "hsl(233, 11%, 84%)",
  };

  const checkBackground = {
    backgroundImage: "linear-gradient(hsl(192, 100%, 67%), rgb(192, 88, 243))",
  };

  const [isCompleted, setIsCompleted] = useState(false);

  function toggleComplete() {
    setIsCompleted(!isCompleted);
  }

  return (
    <li className="list-item card">
      {isCompleted ? (
        <>
          <span
            className="checkbox"
            type="checkbox"
            onClick={toggleComplete}
            style={checkBackground}
          >
            <img className="check-icon" src={CheckIcon} alt="check-icon" />
          </span>
          <p style={completedStyle}>{item.text}</p>
        </>
      ) : (
        <>
          <span
            className="checkbox"
            type="checkbox"
            onClick={toggleComplete}
          ></span>
          <p>{item.text}</p>
        </>
      )}
      <button className="delete-button" onClick={() => handleDelete(item.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
