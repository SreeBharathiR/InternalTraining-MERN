import "./App.css";
import FirstComponent from "./components/FirstComponent";
import secComponent from "./components/secComponent";
function App() {
  console.log("hi");
  return (
    <>
      <h1>Day 2</h1>
      <p>Some text</p>
      <FirstComponent />
      <secComponent />
    </>
  );
}

export default App;
