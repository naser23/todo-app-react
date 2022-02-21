import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import beginningTodos from "../data/BeginningTodos";
import useLocalStorage from "../components/useLocalStorage";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "day");
  const [todos, setTodos] = useLocalStorage("todos", beginningTodos);

  // bringing in change theme function
  function changeTheme() {
    theme === "day" ? setTheme("night") : setTheme("day");
  }

  // changes backround of body based on theme
  theme === "day"
    ? (document.body.style.backgroundColor = "hsl(233, 11%, 84%)")
    : (document.body.style.backgroundColor = "hsl(235, 21%, 11%)");

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
  }

  return (
    <TodoContext.Provider
      value={{ todos, theme, changeTheme, addTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
