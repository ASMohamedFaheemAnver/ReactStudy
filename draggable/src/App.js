import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const isGrapeRef = useRef(false);
  const coordinatesRef = useRef({ startX: 0, startY: 0, lastX: 0, lastY: 0 });
  useEffect(() => {
    if (boxRef.current && containerRef.current) {
      console.log({ component: App.name, boxRef, containerRef });
      const box = boxRef.current;
      const container = containerRef.current;
      const onMouseDown = (event) => {
        console.log({ msg: "mousedown" });
        isGrapeRef.current = true;
        coordinatesRef.current.startX = event.clientX;
        coordinatesRef.current.startY = event.clientY;
      };
      const onMouseUp = (event) => {
        console.log({
          msg: "mouseup",
          left: box.offsetLeft,
          top: box.offsetTop,
        });
        isGrapeRef.current = false;
        // Current position of the box related to container
        coordinatesRef.current.lastX = box.offsetLeft;
        coordinatesRef.current.lastY = box.offsetTop;
      };
      const onMouseMove = (event) => {
        // console.log({
        //   msg: "mousemove",
        //   left: event.clientX,
        //   top: event.clientY,
        // });
        if (isGrapeRef.current) {
          const nextX =
            event.clientX -
            coordinatesRef.current.startX +
            coordinatesRef.current.lastX;
          const nextY =
            event.clientY -
            coordinatesRef.current.startY +
            coordinatesRef.current.lastY;
          box.style.top = `${nextY}px`;
          box.style.left = `${nextX}px`;
        }
      };

      box.addEventListener("mousedown", onMouseDown);
      box.addEventListener("mouseup", onMouseUp);
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseleave", onMouseUp);
      const cleanUp = () => {
        box.removeEventListener("mousedown", onMouseDown);
        box.removeEventListener("mouseup", onMouseUp);
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("mouseleave", onMouseUp);
      };
      return cleanUp;
    }
  }, []);

  return (
    <main>
      <div ref={containerRef} className="container">
        <div ref={boxRef} className="box"></div>
      </div>
    </main>
  );
}

export default App;
