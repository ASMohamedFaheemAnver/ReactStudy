import { memo, useRef, useState } from "react";

const Count = ({ onOdd }) => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  return (
    <div>
      <div>Count : {count}</div>
      <div>Renders : {renders.current++}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          if (count % 2 !== 0) {
            onOdd(count);
          }
        }}
      >
        Increment
      </button>
    </div>
  );
};
export default memo(Count, (prevProps, nextProps) => {
  // Return false if you want to re-render.
  // If we do this we don't have to use useMemo or useCallback, if we handle the props here.
  if (prevProps.data.name !== nextProps.data.name) {
    console.log({ msg: "data.name changed!" });
    return false;
  }

  // Return true if you don't want to re-render.
  return true;
});
