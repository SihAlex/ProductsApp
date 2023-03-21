import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const remove = () => {
    setCount((prev) => prev - 1);
  };

  return [count, add, remove];
};

export default useCount;
