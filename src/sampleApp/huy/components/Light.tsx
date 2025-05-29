interface LightProps {
  color: string;
  active: boolean;
}

function Light({ color, active }: LightProps) {
  return (
    <div
      style={{
        backgroundColor: color,
        opacity: active ? 1 : 0.4,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        margin: "10px auto",
      }}
    ></div>
  );
}

export default Light;
