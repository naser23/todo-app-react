import React from "react";

function HeroImg({ background }) {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return <div className="hero-img" style={backgroundStyle}></div>;
}

export default HeroImg;
