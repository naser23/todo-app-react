import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";

function InputForm({ handleAdd, color }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    handleAdd(text);
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
