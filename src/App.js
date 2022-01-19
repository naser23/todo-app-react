import React from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoItemList from "./components/TodoItemList";
import { useState } from "react";
import beginningTodos from "./data/BeginningTodos";
import { v4 as uuidv4 } from "uuid";

function App() {
  // getting the beginning todos from local storage.
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  console.log(typeof storedTodos);

  // seting an app level state varriable to track the list items
  const [todos, setTodos] = useState(storedTodos);

  // saves the items after every change and on refresh
  localStorage.setItem("todos", JSON.stringify(todos));

  // for deleting todos by unique id
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // creating a new todo object and adding it to array of todos
  function addTodo(text) {
    if (text !== "") {
      let newTodo = {
        id: uuidv4(),
        text: text,
      };
      setTodos([newTodo, ...todos]);
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log(todos);
    } else {
      alert("please type something in the form");
    }
  }

  return (
    <main className="container">
      <Header />
      <InputForm handleAdd={addTodo} />
      <TodoItemList beginningTodos={todos} handleDelete={deleteTodo} />
    </main>
  );
}

export default App;
