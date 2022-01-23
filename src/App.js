import React from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoItemList from "./components/TodoItemList";
import { useState } from "react";
import beginningTodos from "./data/BeginningTodos";
import { StateTest } from "./components/StateTest";
import HeroImg from "./components/HeroImg";
import DayImgMobile from "./images/bg-mobile-light.jpg";

import { v4 as uuidv4 } from "uuid";

function App() {
  console.log(DayImgMobile);
  // getting the beginning todos from local storage.
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  // seting an app level state varriable to track the list items
  const [todos, setTodos] = useState(storedTodos);

  // saves the items after every change and on refresh
  localStorage.setItem("todos", JSON.stringify(todos));

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // find out whether it is day or night on the app.
  const toggledTheme =
    localStorage.getItem("theme") || localStorage.setItem("theme", "day");

  const [theme, setTheme, changeTheme] = StateTest(toggledTheme);
  // toggle it to the opposite theme on click.

  theme === "day"
    ? (document.body.style.backgroundColor = "hsl(233, 11%, 84%)")
    : (document.body.style.backgroundColor = "hsl(235, 21%, 11%)");

  // change the color of the card, background, and header text to the corresponding theme.
  // change the img src of the button and the ::after to the corresponding theme.
  // save and store that preference in local storage

  // theme styling
  const lightCard = {
    height: "100%",
    background: "white",
    borderRadius: "5px",
  };

  const darkCard = {
    height: "100%",
    background: "hsl(235, 24%, 19%)",
    borderRadius: "5px",
  };

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
      {theme === "day" ? (
        <>
          <HeroImg />
          <Header />
          <InputForm handleAdd={addTodo} />
          <TodoItemList beginningTodos={todos} handleDelete={deleteTodo} />
        </>
      ) : (
        <>
          <HeroImg />
          <Header />
          <InputForm handleAdd={addTodo} />
          <TodoItemList beginningTodos={todos} handleDelete={deleteTodo} />
        </>
      )}
    </main>
  );
}

export default App;
