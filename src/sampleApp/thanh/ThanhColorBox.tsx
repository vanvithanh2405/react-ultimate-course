import { useState } from "react";
import styles from './css/Main.module.css';

const data = [
    {id: 1, text: 'red', backgroundColor: 'red'},
    {id: 2, text: 'yellow', backgroundColor: 'yellow'},
    {id: 3, text: 'aqua', backgroundColor: 'aqua'},
    {id: 4, text: 'purple', backgroundColor: 'purple'},
]


function ThanhColorBox() {
    const [colors, setColors] = useState(data);
    const [selectedColor, setSelectedColor] = useState('default');
    const [selectedId, setSelectedId] = useState<number | null>(null);
    
    const handleSelectedColor = (id: number, text: string) => {
        if (selectedId === id) {
            const resetColors = colors.map((color) => ({
                ...color,
                backgroundColor: color.text,
            }));
            setColors(resetColors);
            setSelectedId(null);
            setSelectedColor('default');
        } else {
            const updatedColors = colors.map((color) => ({
                ...color,
                backgroundColor: text,
            }));
            setColors(updatedColors);
            setSelectedId(id);
            setSelectedColor(text);
        }
    };

    return (
    <>
        <h1>Color Box</h1>
        <p>Current color: {selectedColor}</p>
            <div className={styles.container}>
                {colors.map((color) => (
                    <div
                        key={color.id}
                        className={styles.colorBox}
                        style={{ backgroundColor: color.backgroundColor }}
                        onClick={() => {
                            handleSelectedColor(color.id,color.text);
                        }}
                    >
                        {color.text}
                    </div>
                ))}
            </div>
    </>
  )
}

export default ThanhColorBox