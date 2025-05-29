import { useEffect, useState } from "react";
import Light from "./components/Light";
import styled from "./css/Box.module.css";

function TrafficLight() {
  const [colorIndex, setColorIndex] = useState<number>(0);
  const timeDurations: number[] = [4000, 500, 3000];

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % 3);
    }, timeDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  }, [colorIndex]);

  return (
    <div className={styled.trafficLight}>
      <Light color="#ff4d4d" active={colorIndex === 0} />
      <Light color="#00ff00" active={colorIndex === 1} />
      <Light color="#ffeb3b" active={colorIndex === 2} />
    </div>
  );
}

export default TrafficLight;
