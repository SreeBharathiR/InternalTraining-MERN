import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import FirstComponent from "./components/FirstComponent";
import StateComponent from "./components/StateComponent";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  useEffect(() => {
    console.log("rendering effect");
  }, [count]);
  return (
    <>
      <Counter data={count}>
        <Button text="Increment" func={increment} />
        <Button
          text="Decrement"
          func={decrement}
          disable={count < 1 ? true : false}
        />
      </Counter>
    </>
  );
}

export default App;
