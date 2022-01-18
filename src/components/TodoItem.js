import React from "react";
import { v4 as uuidv4 } from "uuid";
import CheckButton from "./CheckButton";
import { useState } from "react";
import CheckIcon from "../images/icon-check.svg";

function TodoItem({ item, handleDelete }) {
  const listId = uuidv4();

  const completedStyle = {
    textDecoration: "line-through",
  };

  const [isCompleted, setIsCompleted] = useState(false);

  function toggleComplete() {
    setIsCompleted(!isCompleted);
  }

  return (
    <li className="list-item card">
      <CheckButton toggleComplete={toggleComplete} />
      {isCompleted ? (
        <p style={completedStyle}>{item.text}</p>
      ) : (
        <p>{item.text}</p>
      )}
      <button className="delete-button" onClick={() => handleDelete(item.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
