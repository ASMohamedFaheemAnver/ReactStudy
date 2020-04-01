import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Greet name="RiFa">This is children props</Greet>
      <Greet name="FloveR">
        <button>Dynamic</button>
      </Greet>
      <Greet name="F"></Greet>
      <Welcome name="RiFa"></Welcome>
      <Welcome name="FloveR"></Welcome>
      <Message></Message> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
