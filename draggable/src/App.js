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
        isGrapeRef.current = true;
        coordinatesRef.current.startX = event.clientX;
        coordinatesRef.current.startY = event.clientY;
        console.log({
          msg: "mousedown",
          downCoordinates: coordinatesRef.current,
        });
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

      // Scenario
      // Box - 0,0 but overall x1,y1
      // Clicking - Clicked position(Coordinates) x2,y2
      // Move - Moving position x3,y3

      // On move if we set x3,y3 we will end up with larger x and y
      // Solution x3,y3 - initial clicked x2,y2 but if we leave/mouseup this somewhere

      // Movement time click coordinates x4,y4(400px, 500px), movement coordinates x5,y5(405px, 505px) according to above calculation box coordinates will be (5px, 5px) which is not true therefor we need to add last time box coordinates.

      const onMouseMove = (event) => {
        // console.log({
        //   msg: "mousemove",
        //   left: event.clientX,
        //   top: event.clientY,
        // });
        if (isGrapeRef.current) {
          const nextX =
            event.clientX -
            // Subtracting initial clicking position
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
