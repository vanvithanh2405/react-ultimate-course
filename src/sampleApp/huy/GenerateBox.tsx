import React, { useState } from "react";
import styled from "./css/Box.module.css";
import { getRandomColor } from "./helper/RandomColor";
interface Box {
  id: number;
  color: string;
}

// first render: component render with initial state
// next render: component render with new state

interface BoxItemProps {
  box: {
    id: number,
    color: string
  }
}

function BoxItem({ box }: BoxItemProps) {
  const [color, setColor] = React.useState(getRandomColor());

  function handleClickBox() {
    setColor(getRandomColor());
  }

  return (
    <div
      className={styled.box}
      style={{ backgroundColor: color }}
      onClick={handleClickBox}
    >
      <p>Box #{box.id}</p>
    </div>
  )
}

function GenerateBox() {
  const [boxNumber, setBoxNumber] = useState<number | undefined>(undefined);
  const [boxes, setBoxes] = useState<Box[]>([]); // so sanh tham chiếu

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 0 || value > 128) {
      setBoxNumber(undefined);
      return;
    }
    setBoxNumber(value);
  };

  const handleClickChange = () => {
    if (boxNumber === undefined) return;

    if (boxNumber === 0) {
      setBoxes([{ id: 0, color: "" }]);
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
        {boxes.length === 1 && boxes[0].id === 0 ? (
          <p>No box</p>
        ) : (
          boxes.map((box) => (
            <BoxItem 
              key={box.id}
              box={box}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default GenerateBox;
