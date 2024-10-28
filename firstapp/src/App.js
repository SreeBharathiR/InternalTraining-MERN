import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import FirstComponent from "./components/FirstComponent";
import StateComponent from "./components/StateComponent";
import Button from "./components/Button";
import CounterContext, { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <>
      <CounterProvider>
        <Counter></Counter>
      </CounterProvider>
      {/* <Counter data={count}>
        <Button text="Increment" func={increment} />
        <Button
          text="Decrement"
          func={decrement}
          disable={count < 1 ? true : false}
        />
      </Counter> */}
    </>
  );
}

export default App;
