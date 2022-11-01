import { useState } from "react";

export default function useCalculator() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  function handleScreen(value) {
    setNumber(value.target.value);
    
  }
  return { number, result, setNumber, setResult, handleScreen };
}
