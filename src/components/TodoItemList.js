import React from "react";
import TodoItem from "./TodoItem";
import FilterTodos from "./FilterTodos";

function TodoItemList({ todos, handleDelete, color }) {
  return (
    <section className={`list-items-area ${color}`}>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            color={color}
          />
        ))}
      </ul>
      <FilterTodos color={color} />
    </section>
  );
}

export default TodoItemList;
