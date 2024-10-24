import "./App.css";
import FirstComponent from "./components/FirstComponent";
import StateComponent from "./components/StateComponent";

function App() {
  console.log("hi");
  return (
    <>
      <h1>Day 2</h1>
      <p>Some text</p>
      <FirstComponent />
      <StateComponent />
    </>
  );
}

export default App;
