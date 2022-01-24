import React from "react";
import HeroImg from "./components/HeroImg";
import DayImg from "./images/bg-desktop-light.jpg";
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

  return (
    <main className="container">
      <HeroImg background={DayImg} />
      <Header src={SunIcon} />
      <InputForm handleAdd={addTodo} />
      <TodoItemList todos={todos} handleDelete={deleteTodo} />
    </main>
  );
}

export default App;
