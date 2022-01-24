import React from "react";
import HeroImg from "./components/HeroImg";
import DayImg from "./images/bg-desktop-light.jpg";
import NightImg from "./images/bg-desktop-dark.jpg";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoItemList from "./components/TodoItemList";
import useLocalStorage from "./components/useLocalStorage";
import BeginningTodos from "./data/BeginningTodos";
import SunIcon from "./images/icon-sun.svg";
import { v4 as uuidv4 } from "uuid";
import MoonIcon from "./images/icon-moon.svg";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", BeginningTodos);
  const [theme, setTheme] = useLocalStorage("theme", "day");

  // add todos
  function addTodo(text) {
    if (text !== "") {
      let newTodo = {
        id: uuidv4(),
        text: text,
      };
      setTodos([newTodo, ...todos]);
    } else {
      alert("please type something in the form");
    }
  }

  // delete todos
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos);
  }

  function changeTheme() {
    theme === "day" ? setTheme("night") : setTheme("day");
  }

  theme === "day"
    ? (document.body.style.backgroundColor = "hsl(233, 11%, 84%)")
    : (document.body.style.backgroundColor = "hsl(235, 21%, 11%)");

  return (
    <main className="container">
      {theme === "day" ? (
        <>
          <HeroImg background={DayImg} />
          <Header src={MoonIcon} changeTheme={changeTheme} />
          <InputForm handleAdd={addTodo} color="" />
          <TodoItemList todos={todos} handleDelete={deleteTodo} color="" />
        </>
      ) : (
        <>
          <HeroImg background={NightImg} />
          <Header src={SunIcon} changeTheme={changeTheme} />
          <InputForm handleAdd={addTodo} color="dark" />
          <TodoItemList todos={todos} handleDelete={deleteTodo} color="dark" />
        </>
      )}
    </main>
  );
}

export default App;
