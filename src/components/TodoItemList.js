import React from "react";
import TodoItem from "./TodoItem";

import { v4 as uuidv4 } from "uuid";

function TodoItemList({ beginningTodos, handleDelete, card }) {
  return (
    <section className="list-items-area">
      <ul>
        {beginningTodos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            card={card}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoItemList;
