import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Uwuuu!",
          "ikaw?",
          "nevermind hahaha!",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 120,
      }}
    />
  );
}

export default Type;
