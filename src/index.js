import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div className="App">
      {lightOn === false ? (
        <img src={white} alt="light off" />
      ) : (
        <img src={yellow} alt="light on" />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
