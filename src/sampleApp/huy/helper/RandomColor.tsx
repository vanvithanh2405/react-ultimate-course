export const getRandomColor = (): string => {
  const colors = [
    "yellow",
    "green",
    "purple",
    "orange",
    "red",
    "pink",
    "blue",
    "cyan",
    "magenta",
    "brown",
    "gray",
    "white",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
