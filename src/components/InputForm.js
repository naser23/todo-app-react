import React from "react";
import { useState } from "react";

function InputForm({ handleAdd }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAdd(text);
    setText("");
  }

  return (
    <form className="todo-form card" onSubmit={handleSubmit}>
      <button>Check</button>
      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={handleChange}
        value={text}
      />
    </form>
  );
}

export default InputForm;
