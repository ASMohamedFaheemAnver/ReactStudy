import { useEffect, useRef } from "react";

// Assignments to the 'object2' variable from inside React Hook useEffect will be lost after each render.
// To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property.
// Otherwise, you can move this variable directly inside useEffect

export const useSingletonHook = () => {
  console.log({ hook: useSingletonHook.name });
  const object1 = { msg: "CONSTANCE" };
  // let object2;
  const object2 = useRef();
  useEffect(() => {
    // object2 = { msg: "CONSTANCE" };
    object2.current = { msg: "CONSTANCE" };
  }, []);
  return { object1, object2: object2.current };
};
