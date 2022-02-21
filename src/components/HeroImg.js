import React from "react";
import DayImg from "../images/bg-desktop-light.jpg";
import NightImg from "../images/bg-desktop-dark.jpg";
import TodoContext from "../context/TodoContext";
import { useContext } from "react";

function HeroImg() {
  const { theme } = useContext(TodoContext);
  let background;

  theme === "day" ? (background = DayImg) : (background = NightImg);

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return <div className="hero-img" style={backgroundStyle}></div>;
}

export default HeroImg;
