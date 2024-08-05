import logo from "./logo.svg";
import "./App.css";
import YoutubeForm from "./components/YoutubeForm.v2";
import Parent from "./components/Parent";
import { memo } from "react";

function App() {
  return (
    <div className="App">
      <Parent children={Child}>
        {/* {memo((props) => {
          console.log({ props });
          return <p>Yo</p>;
        })} */}
      </Parent>
      <YoutubeForm />
    </div>
  );
}

const Child = memo((props) => {
  console.log({ props });
  return <p>I am just a child :(</p>;
});

export default App;
