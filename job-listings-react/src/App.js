import "./App.css";
import Cards from "./Cards";
import data from "./data.json";

function App() {
  return (
    <div>
      <img id="header" src="Header.png" alt="Header background" />
      <Cards jobs={data} />
    </div>
  );
}

export default App;
