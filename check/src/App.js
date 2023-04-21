import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="container">
        <button
          onClick={() => {
            console.log({ msg: 1 });
          }}
          className="div one"
        >
          1
        </button>
        <button
          onClick={() => {
            console.log({ msg: 2 });
          }}
          className="div two"
        >
          2
        </button>
        <button
          onClick={() => {
            console.log({ msg: 3 });
          }}
          className="div three"
        >
          3
        </button>
        <button
          onClick={() => {
            console.log({ msg: 4 });
          }}
          className="div four"
        >
          4
        </button>
        <button
          onClick={() => {
            console.log({ msg: 5 });
          }}
          className="div five"
        >
          5
        </button>
        <button
          onClick={() => {
            console.log({ msg: 6 });
          }}
          className="div six"
        >
          6
        </button>
      </div>
    </div>
  );
}

export default App;
