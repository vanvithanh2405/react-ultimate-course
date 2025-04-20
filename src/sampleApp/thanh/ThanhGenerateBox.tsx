import { useState } from 'react';
import { getRandomColor } from './helper/BoxHelpers';
import styles from './css/Main.module.css';

interface Box {
    id: string 
    color: string
}

function ThanhGenerateBox() {
    const [boxCount, setBoxCount] = useState('');
    const [boxes, setBoxes] = useState<Box[]>([]);

    const handleClickGenerate = () => {
        const n = parseInt(boxCount);
        if (!isNaN(n) && n >= 1 && n <= 128) {
            const newBoxes: Box[] = Array.from({ length: n }, (_, i) => ({
                id: (i + 1).toString(),
                color: getRandomColor(),
            }));
            setBoxes(newBoxes);
        } else {
            setBoxes([]);
        }
    }
    return (
        <>  
            <h1>Generate Box</h1>
                <label>
                    Number of boxes: 
                    <input
                        type='text'
                        value={boxCount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBoxCount(e.target.value)}
                    />
                </label>
                <button onClick={handleClickGenerate}>Generate</button>
                <div className={styles.container}>
                    {boxCount === '0' ? (
                        <p>no box</p>
                    ) : (
                        boxes.map((box) => (
                            <div
                                key={box.id}
                                className={styles.box}
                                style={{ backgroundColor: box.color }}
                            >
                                Box #{box.id}
                            </div>
                        ))
                    )}
                </div>
        </>
  )
}

export default ThanhGenerateBox