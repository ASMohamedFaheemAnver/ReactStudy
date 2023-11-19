import React, { useMemo, useRef, useState } from "react";
const Closure = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prvCount) => prvCount + 1);
  };

  // Solution
  const countRef = useRef(count);
  countRef.current = useMemo(() => {
    return count;
  }, [count]);

  const printCount = () => {
    setTimeout(() => {
      console.log({ count, updatedCount: countRef.current });
    }, 2000);
  };

  // Click print count and increment several times, The count printed will show value at the moment we click print.
  return (
    <div>
      <p>Count is : {count}</p>
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <button onClick={printCount}>Print count</button>
        <button onClick={increment}>Increase</button>
      </div>
    </div>
  );
};

export default Closure;
