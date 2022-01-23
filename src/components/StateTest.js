import React from "react";
import { useState } from "react";

export function StateTest(initialValue) {
  const [theme, setTheme] = useState(initialValue);

  localStorage.setItem("theme", theme);

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
      document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
      localStorage.setItem("theme", theme);
    } else if (theme === "night") {
      setTheme("day");
      document.body.style.backgroundColor = "hsl(233, 11%, 84%)";
      localStorage.setItem("theme", theme);
    }
  }
  return [theme, setTheme, changeTheme];
}
