import React from "react";
import TodoItem from "./TodoItem";

function TodoItemList({ todos, handleDelete }) {
  return (
    <section className="list-items-area">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>
    </section>
  );
}

export default TodoItemList;
