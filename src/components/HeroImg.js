import React from "react";
import DayImgMobile from "../images/bg-mobile-light.jpg";
import NightImgMobile from "../images/bg-mobile-dark.jpg";
import { StateTest } from "./StateTest";

function HeroImg() {
  const toggledTheme =
    localStorage.getItem("theme") || localStorage.setItem("theme", "day");
  const [theme, setTheme, changeTheme] = StateTest(toggledTheme);

  const lightMobileBg = {
    backgroundImage: `url(${DayImgMobile})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const darkMobileBg = {
    backgroundImage: `url(${NightImgMobile})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      {theme === "day" ? (
        <div className="hero-img" style={{ lightMobileBg }}></div>
      ) : (
        <div className="hero-img" style={{ darkMobileBg }}></div>
      )}
    </>
  );
}

export default HeroImg;
