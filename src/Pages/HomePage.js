import React from "react";
import myImage from "../Images/IMG_4391.jpeg"; // Importing image from the Images folder in SRC

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover", // cover the entire container
        height: "100vh", // full viewport height
        width: "100vw", // full viewport width
      }}
    >
      <h1>Steph's Dog Walking LLC</h1>
    </div>
  );
}

export default HomePage;
