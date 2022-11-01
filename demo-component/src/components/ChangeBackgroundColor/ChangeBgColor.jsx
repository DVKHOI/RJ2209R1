import React from "react";

const ChangeBgColor = () => {
  const [color, setColor] = React.useState("#f8678a");
  const arrColor = ["red", "blue", "green"];
  function handleChangeColor() {
    setInterval(function delay() {
      const index = arrColor[Math.floor(Math.random() * arrColor.length)];
      console.log(index);
      setColor((color) => index);
    }, 2000);
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          paddingTop: 20,
          width: 400,
          height: 80,
          margin: "auto",
        }}
      />
      <button onClick={handleChangeColor}>Change</button>
    </div>
  );
};

export default ChangeBgColor;
