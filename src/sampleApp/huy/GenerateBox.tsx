import React, { useState } from "react";
import styled from "./css/Box.module.css";

interface Box {
  id: number;
  color: string;
}

function GenerateBox() {
  const [boxNumber, setBoxNumber] = useState<number | undefined>(undefined);
  const [boxes, setBoxes] = useState<Box[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 0 || value > 128) {
      setBoxNumber(undefined);
      return;
    }
    setBoxNumber(value);
  };

  const getRandomColor = (): string => {
    const colors = ["yellow", "green", "purple", "orange", "red", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleClickChange = () => {
    if (boxNumber === undefined) return;
    if (boxNumber === 0) {
      setBoxes([{ id: -1, color: "" }]);
      return;
    }

    const newBoxes: Box[] = Array.from({ length: boxNumber }, (_, index) => ({
      id: index + 1,
      color: getRandomColor(),
    }));
    setBoxes(newBoxes);
  };

  return (
    <div>
      <h1>HUY - Generate Box</h1>
      <label htmlFor="">Number of boxes:</label>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClickChange}>Generate</button>
      <div className={styled.boxContainer}>
        {boxes.length === 1 && boxes[0].id === -1 ? (
          <p>No box</p>
        ) : (
          boxes.map((box) => (
            <div
              key={box.id}
              className={styled.box}
              style={{ backgroundColor: box.color }}
            >
              <p>Box #{box.id}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default GenerateBox;
