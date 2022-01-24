import React from "react";
import CheckIcon from "../images/icon-check.svg";
import { useState } from "react";

function TodoItem({ todo, handleDelete, color }) {
  const [isComplete, setIsComplete] = useState(false);

  const completedStyle = {
    textDecoration: "line-through",
    color: "hsl(234, 11%, 52%)",
  };

  const checkBackground = {
    backgroundImage: "linear-gradient(hsl(192, 100%, 67%), rgb(192, 88, 243))",
  };

  function toggleComplete() {
    setIsComplete(!isComplete);
  }

  return (
    <li className={`list-item card ${color}`}>
      {isComplete ? (
        <>
          <span
            className="checkbox"
            type="checkbox"
            onClick={toggleComplete}
            style={checkBackground}
          >
            <img className="check-icon" src={CheckIcon} alt="" />
          </span>
          <p className={`${color}`} style={completedStyle}>
            {todo.text}
          </p>
          <button
            className={`delete-button ${color}`}
            onClick={() => handleDelete(todo.id)}
          >
            X
          </button>
        </>
      ) : (
        <>
          <span
            className="checkbox"
            type="checkbox"
            onClick={toggleComplete}
          ></span>
          <p className={`${color}`}>{todo.text}</p>
          <button
            className={`delete-button ${color}`}
            onClick={() => handleDelete(todo.id)}
          >
            X
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
