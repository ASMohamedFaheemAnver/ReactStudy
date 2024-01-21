import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setExpand((prevState) => !prevState);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      // style={{
      //   ...(expand
      //     ? { visibility: "visible", opacity: 1 }
      //     : { visibility: "hidden", opacity: 0 }),
      // }}
      className="bottom_today"
    >
      <p
        style={{
          ...(expand ? { marginLeft: 16 } : { marginLeft: 0 }),
        }}
      >
        Hi
      </p>
    </div>
  );
}

export default App;
