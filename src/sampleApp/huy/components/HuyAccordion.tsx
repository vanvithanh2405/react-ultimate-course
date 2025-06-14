import { useState } from 'react'
import styled from '../css/Box.module.css';


function HuyAccordion() {
    const data = [
      {
        title: "CONSTRUCTION",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "INTERNAL GAIN",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "AIRFLOW",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "HEATING & COOLING",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "LOCATION, CLIMATE & WEATHER",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ];
    const [openIndex, setOpenIndex] = useState<number[]>([]);

    const toggle = (index:number) => {
      setOpenIndex((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    };
  return (
    <div className={styled.accordionContainer}>
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className={styled.accordionTitle} onClick={() => toggle(index)}>
            {item.title}
          </div>
          {openIndex.includes(index) && (
            <div className={styled.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HuyAccordion