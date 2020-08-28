import React, { useEffect, useState } from "react";

function IntervalHooksCounter() {
  const [count, setcount] = useState(0);

  const increament = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(increament, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <p>count value: {count}</p>
    </div>
  );
}

export default IntervalHooksCounter;
