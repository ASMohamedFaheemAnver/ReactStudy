import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (true) {
      console.log({ msg: "mounted" });
      return () => {
        console.log({ msg: "unmounted" });
      };
    }
  }, []);
  return <></>;
}

export default App;
