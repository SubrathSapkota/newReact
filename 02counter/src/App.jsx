import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncremetn = () => {
    count === 10 ? setCount(count) : setCount(count + 1);
  };

  const handleDecrement = () => {
    count === 0 ? setCount(count) : setCount(count - 1);
  };

  return (
    <>
      <h1>Counter app</h1>
      <p>{count}</p>
      <button onClick={handleIncremetn}>Add+</button>
      <button onClick={handleDecrement}>Dec+</button>
    </>
  );
}

export default App;
