import React from "react";

const Count = () => {
  const [count, setCount] = React.useState(0);
  function handleDecrease(e) {
    if (count >= 10) return;
    setCount((counter) => counter + 1);
  }
  function handleIncrease(e) {
    if (count <= -10) return;

    setCount((counter) => counter - 1);
  }
  return (
    <div>
      <button onClick={handleDecrease}>Decrease</button>
      <h2 className="p-5">{count}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Count;
