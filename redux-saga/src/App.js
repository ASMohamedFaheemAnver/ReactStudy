import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./catState";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const isLoading = useSelector((state) => state.cats.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, []);

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure!
      </p>
      <hr></hr>
      {isLoading && <p>Loading...</p>}
      <div className="Gallery">
        {cats?.map((cat) => {
          return (
            <div key={cat?.id} className="row">
              <div className="column column-left">
                <img
                  src={cat.image?.url}
                  alt={cat.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="column column-right">
                <h2>{cat.name}</h2>
                <h5>{cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
