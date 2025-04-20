import { useState } from "react";
import styled from "./css/Box.module.css";

const data = [
  { id: 1, text: "red", backgroundColor: "red" },
  { id: 2, text: "yellow", backgroundColor: "yellow" },
  { id: 3, text: "aqua", backgroundColor: "aqua" },
  { id: 4, text: "purple", backgroundColor: "purple" },
];

function ColorBox() {
  const [colors] = useState(data);
  const [currentColor, setCurrentColor] = useState("default");

  function handleBoxColor(bgColor: string) {
    if (bgColor === currentColor) {
      setCurrentColor('default');
      return
    }
    setCurrentColor(bgColor)
  }

  return (
    <div>
      <h1>Huy Color Box</h1>
      <p>Current color: {currentColor}</p>
      <div className={styled.container}>
        {colors.map((color) => {
          return (
            <div
              key={color.id}
              style={{ backgroundColor:  currentColor === 'default' ? color.backgroundColor : currentColor }}
              className={styled.boxColor}
              onClick={() => handleBoxColor(color.backgroundColor)}
            >
              {color.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColorBox;
