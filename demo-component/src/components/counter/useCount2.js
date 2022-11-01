import { useState } from "react";

export default function useCount2() {
  const [count1, setCount] = useState(0);
  function hanldAddCount1() {
    setCount((counter) => count1 + 2);
  }
  return { count1, hanldAddCount1 };
}
