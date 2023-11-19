import { useCallback, useMemo, useState } from "react";
import Count from "./Count";

const Memo = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Count
        onOdd={useCallback((odd) => {
          setText(odd);
        }, [])}
        data={useMemo(() => ({ name: "John" }), [])}
      />
    </div>
  );
};

export default Memo;
