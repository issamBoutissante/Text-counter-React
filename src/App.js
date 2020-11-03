import React, { useState } from "react";
import "./App.css";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/charComponent";

function App() {
  const [listchar, setlistchar] = useState([]);
  function changelist(e) {
    setlistchar([...e.target.value]);
  }
  function deletechar(index) {
    const list = [...listchar];
    list.splice(index, 1);
    setlistchar([...list]);
  }
  return (
    <div className="App">
      <input
        type="text"
        onChange={changelist}
        value={listchar.join("")}
      ></input>
      <hr />
      <p>{listchar.length}</p>
      <hr />
      <ValidationComponent len={listchar.length} />
      <hr />
      {listchar.map((char, index) => (
        <CharComponent
          delete={deletechar.bind(this, index)}
          key={index}
          char={char}
        ></CharComponent>
      ))}
    </div>
  );
}
export default App;
