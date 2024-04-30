import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("value added!", Math.random());
    if (counter === 21) return;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1); 
  
  };
  const removeValue = () => {
    console.log("value added!", Math.random());
    if (counter === -1) return;

    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>Chai aur React !:{counter}</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value:{counter}</button>
    </>
  );
}

export default App;
