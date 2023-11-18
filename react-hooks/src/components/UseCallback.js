import React, { useCallback, useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log({ msg: "Updating items.", component: List.name });
  }, [getItems]);
  return items?.map((item) => <div key={item}>{item}</div>);
};

// https://www.youtube.com/watch?v=_AyFP5s69N4&ab_channel=WebDevSimplified
const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // We are passing getItems, but whenever other state changes - getItems function also re created with new references if we don't use useCallback.
  // Toggle theme to see list re created even though the items aren't changed.
  // We can also useMemo but it will return the results of the function we passed but useCallback just give the function.
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  // If u don't pass number as dependency the item list won't change.

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  const toggleTheme = () => {
    setDark((prvState) => !prvState);
  };

  return (
    <div
      style={{
        ...theme,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={toggleTheme}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallback;
