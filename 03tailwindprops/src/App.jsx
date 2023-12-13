import { useState } from "react";
import "./App.css";
import Card from "./card";

function App() {
  const [count, setCount] = useState(15);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);

  };

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl">Tailwind test</h1>
      <h2>Number: {count}</h2>
      <button onClick={handleAdd}>Add+</button>
      {/* <button onClick={handleSub}>Sub-</button> */}
      <Card title="first" desc="this is the first card" />
      <Card title="second" desc="this is the second card" />
    </>
  );
}

export default App;
