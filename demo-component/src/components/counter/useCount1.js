import { useState } from "react";

export default function useCount1() {
  const [count, setCount] = useState(0);
  function hanldAddCount() {
    setCount((counter) => count + 1);
  }
  return { count, hanldAddCount };
}
