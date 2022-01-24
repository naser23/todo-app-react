import React from "react";
import CheckIcon from "../images/icon-check.svg";

function TodoItem({ todo, handleDelete }) {
  return (
    <li className="list-item card">
      <span className="checkbox" type="checkbox">
        <img className="check-icon" src={CheckIcon} alt="" />
      </span>
      <p>{todo.text}</p>
      <button className="delete-button" onClick={() => handleDelete(todo.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
