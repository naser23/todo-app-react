import React from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoItemList from "./components/TodoItemList";
import { useState } from "react";
import beginningTodos from "./data/BeginningTodos";
import SunIcon from "./images/icon-sun.svg";
import MoonIcon from "./images/icon-moon.svg";

import { v4 as uuidv4 } from "uuid";

function App() {
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
  const [theme, setTheme] = useState(toggledTheme);

  localStorage.setItem("theme", theme);
  // toggle it to the opposite theme on click.

  function changeTheme() {
    // if (localStorage.getItem("theme") == "day") {
    //   document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
    //   localStorage.setItem("theme", "night");
    //   console.log(theme);
    // } else if (localStorage.getItem("theme") == "night") {
    //   document.body.style.backgroundColor = "hsl(233, 11%, 84%)";
    //   localStorage.setItem("theme", "day");
    // }

    if (theme === "day") {
      setTheme("night");
      localStorage.setItem("theme", theme);
    } else if (theme === "night") {
      setTheme("day");
      localStorage.setItem("theme", theme);
    }
  }

  theme === "day"
    ? (document.body.style.backgroundColor = "hsl(233, 11%, 84%)")
    : (document.body.style.backgroundColor = "hsl(235, 21%, 11%)");

  // change the color of the card, background, and header text to the corresponding theme.
  // change the img src of the button and the ::after to the corresponding theme.
  // save and store that preference in local storage

  // dark mode styling
  const darkContainer = {};

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
          <Header changeTheme={changeTheme} Icon={MoonIcon} />
          <InputForm handleAdd={addTodo} />
          <TodoItemList beginningTodos={todos} handleDelete={deleteTodo} />
        </>
      ) : (
        <>
          <Header changeTheme={changeTheme} Icon={SunIcon} />
          <InputForm handleAdd={addTodo} />
          <TodoItemList beginningTodos={todos} handleDelete={deleteTodo} />
        </>
      )}
    </main>
  );
}

export default App;
