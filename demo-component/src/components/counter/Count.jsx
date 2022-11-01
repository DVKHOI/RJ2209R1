import React from "react";
import useCount1 from "./useCount1";
import useCount2 from "./useCount2";

const Count = () => {
  const { count, hanldAddCount } = useCount1();
  const { count1, hanldAddCount1 } = useCount2();
  return (
    <div>
      <div>
        <h1>COUNT: {count}</h1>
        <button onClick={hanldAddCount}>Add</button>
      </div>
      <div>
        <h1>COUNT: {count1}</h1>
        <button onClick={hanldAddCount1}>Add</button>
      </div>
    </div>
  );
};

export default Count;
