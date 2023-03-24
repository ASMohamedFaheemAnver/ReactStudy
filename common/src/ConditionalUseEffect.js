import { useEffect } from "react";

// Check unmount callback calling if condition provided
function ConditionalUseEffect() {
  useEffect(() => {
    if (true) {
      console.log({ component: ConditionalUseEffect.name, msg: "mounted" });
      return () => {
        console.log({ component: ConditionalUseEffect.name, msg: "unmounted" });
      };
    }
  }, []);
  return <></>;
}

export default ConditionalUseEffect;
