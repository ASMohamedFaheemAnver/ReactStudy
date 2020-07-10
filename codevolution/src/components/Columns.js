import React from "react";

function Columns() {
  const items = [];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment>
          <td>Title</td>
          <td>{item.title}</td>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default Columns;
