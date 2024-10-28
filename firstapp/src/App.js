import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import FirstComponent from "./components/FirstComponent";
import StateComponent from "./components/StateComponent";
import Button from "./components/Button";
import CounterContext, { CounterProvider } from "./context/CounterContext";

const initialState = {
  user: { name: "Sree", id: 1 },
  tasks: [{ name: "task 1", id: 1 }],
};
const reducerFunc = (curentState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...curentState,
        tasks: [
          ...curentState.tasks,
          { name: action.payload.name, id: action.payload.id },
        ],
      };
    case "DELETE":
      return {};
    default:
      return curentState;
  }
};
function App() {
  const [typedValue, setTypedValue] = useState("");
  const [taskState, taskDispatch] = useReducer(reducerFunc, initialState);
  function handleAdd() {
    taskDispatch({
      type: "ADD",
      payload: { name: typedValue, id: Date.now() },
    });
    setTypedValue("");
  }
  function handleDelete(id) {
    taskDispatch({
      type: "DELETE",
      payload: id,
    });
  }
  return (
    <>
      <h1>Task Manager</h1>
      <p>{taskState.user.name}</p>
      <input
        type="text"
        value={typedValue}
        onChange={(e) => {
          setTypedValue(e.target.value);
        }}
      ></input>
      <button onClick={handleAdd}>ADD</button>
      <h3>Tasks:</h3>
      {taskState.tasks.map((val) => (
        <>
          {" "}
          <li key={val.id}>{val.name}</li>
          <button
            onClick={() => {
              handleDelete(val.id);
            }}
          >
            Delete
          </button>
        </>
      ))}
      {console.log(typedValue)}
      {/* <CounterProvider>
        <Counter></Counter>
      </CounterProvider>
      {/* <Counter data={count}>
        <Button text="Increment" func={increment} />
        <Button
          text="Decrement"
          func={decrement}
          disable={count < 1 ? true : false}
        />
      </Counter> */}{" "}
      {/* */}
    </>
  );
}

export default App;
