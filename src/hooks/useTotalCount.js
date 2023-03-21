import { useState } from "react";

const useTotalCount = () => {
  const [totalCount, setTotalCount] = useState(0);

  const renderedCount = (unmount) => {
    setTotalCount((prev) => (unmount ? prev - 1 : prev + 1));
  };

  return [totalCount, renderedCount];
};

export default useTotalCount;
