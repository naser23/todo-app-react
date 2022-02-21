import React from "react";
import TodoContext from "../context/TodoContext";
import { useContext } from "react";

function FilterTodos() {
  const { theme } = useContext(TodoContext);
  const textColor = {
    color: "hsl(234, 39%, 85%)",
  };

  return (
    <div className="filtered-todos">
      {theme === "night" ? (
        <>
          <p style={textColor}>5 items left</p>
          <p style={textColor}>Clear Completed</p>
        </>
      ) : (
        <>
          <p>5 items left</p>
          <p>Clear Completed</p>
        </>
      )}
    </div>
  );
}

export default FilterTodos;
