export const getRandomColor = () => {
    const basicHues = [0, 30, 60, 120, 180, 240, 270, 300]; // màu cơ bản
    const hue = basicHues[Math.floor(Math.random() * basicHues.length)];
    return `hsl(${hue}, 70%, 50%)`;
};