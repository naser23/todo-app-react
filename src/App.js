import React from "react";
import HeroImg from "./components/HeroImg";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoItemList from "./components/TodoItemList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <main className="container">
        <HeroImg />
        <Header />
        <InputForm />
        <TodoItemList />
      </main>
    </TodoProvider>
  );
}

export default App;
