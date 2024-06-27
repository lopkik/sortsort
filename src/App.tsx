import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { iterMergeSort } from "./utils";

function App() {
  const [valList, setValList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const randomizeValList = () => {
    let newValList = valList
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val);

    setValList(newValList);
  };

  const sortValList = async () => {
    let newValList = [...valList];
    await iterMergeSort(newValList, setValList);
  };

  useEffect(() => {
    randomizeValList();
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <Nav />
      <main>
        <h1>SORTING AREA</h1>
        <button onClick={sortValList}>sort</button>
        <button onClick={randomizeValList}>randomize</button>
        <div id="sort-col-container">
          {valList.map((val) => (
            <div
              key={`sort-col-${val}`}
              id={`sort-col-${val}`}
              className="sort-col"
              style={{ height: val * 10 + "%" }}
            ></div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
