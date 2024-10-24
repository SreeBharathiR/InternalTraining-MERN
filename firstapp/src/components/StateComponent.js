import React, { useState } from "react";

const StateComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [boo, setBoo] = useState(false);
  const [list, setList] = useState([
    { frt: "apple", id: "a" },
    { frt: "banana", id: "b" },
  ]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count : {count}</p>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="location">Location :</label>
      <input
        type="text"
        name="location"
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <br></br>
      <button onClick={() => setBoo(true)}>Sumbit</button>
      <p>Details:</p>
      {console.log(boo)}
      {boo ? (
        <>
          <p>{name}</p>
          <p>{location}</p>
        </>
      ) : (
        ""
      )}

      <ul>
        {list.map((val) => (
          <li key={val.id}>{val.frt}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateComponent;
