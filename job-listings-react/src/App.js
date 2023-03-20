import "./App.css";
import Cards from "./Cards";
import data from "./data.json";
import FilterLabels from "./FilterLabels";

function App() {

  return (
    <div>
      <img id="header" src="Header.png" alt="Header background" />
      {/* <FilterLabels /> */}
      <Cards jobs={data} />
    </div>
  );
}

export default App;
