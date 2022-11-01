import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count > 1) {
        setCount(count - 1);
      } else {
        clearInterval(intervalId);
        alert("Time's up");
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [count]);
  return <div>Count down from {count}</div>;
};

export default CountDown;
