import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
import TodoContext from "../context/TodoContext";
import { useContext } from "react";

function InputForm() {
  const { theme, addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");
  let color;

  theme === "day" ? (color = "") : (color = "dark");

  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  function updateText(e) {
    setText(e.currentTarget.value);
  }

  return (
    <form className={`todo-form card ${color}`} onSubmit={onSubmit}>
      <span className="checkbox" type="checkbox"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={updateText}
        value={text}
      />
    </form>
  );
}

export default InputForm;
