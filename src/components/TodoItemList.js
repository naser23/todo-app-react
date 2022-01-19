import React from "react";
import TodoItem from "./TodoItem";

import { v4 as uuidv4 } from "uuid";

function TodoItemList({ beginningTodos, handleDelete }) {
  return (
    <section className="list-items-area">
      <ul>
        {beginningTodos.map((item) => (
          <TodoItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </section>
  );
}

export default TodoItemList;
