import { useState } from "react";
import styled from "./css/Box.module.css";

const data = [
  { id: 1, text: "red", backgroundColor: "red" },
  { id: 2, text: "yellow", backgroundColor: "yellow" },
  { id: 3, text: "aqua", backgroundColor: "aqua" },
  { id: 4, text: "purple", backgroundColor: "purple" },
];

function ColorBox() {
  const [colors, setColors] = useState(data);
  const [currText, setCurrText] = useState("default");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  function handleBoxColor(idClicked: number, text: string) {
    if (selectedId === idClicked) {
      const resetColor = colors.map((color) => ({
        ...color,
        backgroundColor: color.text,
      }));
      setCurrText("default");
      setSelectedId(null);
      setColors(resetColor);
    } else {
      setSelectedId(idClicked);
      setCurrText(text);
      const updateColor = colors.map((color) => ({
        ...color,
        backgroundColor: text,
      }));
      setColors(updateColor);
    }
  }
  

  return (
    <div>
      <h1>Color Box</h1>
      <p>Current color: {currText}</p>
      <div className={styled.container}>
        {colors.map((color) => {
          return (
            <div
              key={color.id}
              style={{ backgroundColor: color.backgroundColor }}
              className={styled.boxColor}
              onClick={() => handleBoxColor(color.id, color.text)}
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
