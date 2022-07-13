import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCounter = (value: number) => {
    setCount(count + value);
  };
  return (
    <div>
      <Count label="Counter" />
      <Count label={`${count}`} />
      <Button label="Add" handleCounter={() => handleCounter(1)} />
      <Button label="Reduce" handleCounter={() => handleCounter(-1)} />
    </div>
  );
};

export default Counter;
