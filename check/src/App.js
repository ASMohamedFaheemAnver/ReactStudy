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
          <label className="up-label">Organization</label>
        </button>
        <button
          onClick={() => {
            console.log({ msg: 2 });
          }}
          className="div two"
        >
          <label className="down-label">Humor</label>
        </button>
        <button
          onClick={() => {
            console.log({ msg: 3 });
          }}
          className="div three"
        >
          <label className="down-label">Opinions</label>
        </button>
        <button
          onClick={() => {
            console.log({ msg: 4 });
          }}
          className="div four"
        >
          <label className="down-label">Facts</label>
        </button>
        <button
          onClick={() => {
            console.log({ msg: 5 });
          }}
          className="div five"
        >
          <label className="down-label">Research</label>
        </button>
        <button
          onClick={() => {
            console.log({ msg: 6 });
          }}
          className="div six"
        >
          <label className="down-label">Rumors</label>
        </button>
      </div>
    </div>
  );
}

export default App;
