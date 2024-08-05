import React from "react";

const Parent = ({ children: ChildComponent }) => {
  return <ChildComponent {...{ x: 1, y: 2 }} />;
};

export default Parent;
