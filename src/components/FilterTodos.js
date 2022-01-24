import React from "react";

function FilterTodos({ color }) {
  console.log(color);
  const textColor = {
    color: "hsl(234, 39%, 85%)",
  };
  return (
    <div className="filtered-todos">
      {color === "dark" ? (
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
