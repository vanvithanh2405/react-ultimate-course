import React, { useState } from "react";
import styled from "./css/Box.module.css";

interface Box {
  id: number;
  color: string;
}

function GenerateBox() {
  const [boxNumber, setBoxNumber] = useState(0);
  const [boxes, setBoxes] = useState<Box[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0 || value > 128) {
      value = 0;
    }
    setBoxNumber(value);
    console.log(setBoxNumber);
  };

  const getRandomColor = (): string => {
    const colors = ["yellow", "green", "purple", "orange", "red", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleClickChange = () => {
    const newBoxes: Box[] = Array.from({ length: boxNumber }, (_, index) => ({
      id: index + 1,
      color: getRandomColor(),
    }));
    return setBoxes(newBoxes);
  };

  return (
    <div>
      <h1>HUY - Generate Box</h1>
      <label htmlFor="">Number of boxes:</label>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClickChange}>Generate</button>
      <div className={styled.boxContainer}>
        {boxes.map((box) => (
          <div className={styled.box} style={{ backgroundColor: box.color }}>
            <p>Box #{box.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenerateBox;
