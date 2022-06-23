import { useState } from "react";

function useCard(initial, stock) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return { count, handleIncrement, handleDecrement };
}
export{useCard};