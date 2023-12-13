import { useState } from "react";

function App() {

  const [color, setColor] = useState("red")

  return (
    <>
      <div className="flex w-full h-screen " style={{backgroundColor: color}}>
        <div className="w-full flex justify-evenly h-10 bg-white">
          <button className="bg-green-400 text-white placeholder:p-1 px-4 rounded-full" onClick={()=>setColor("green")}>green</button>
          <button className="bg-blue-400 text-white p-1 px-4 rounded-full" onClick={()=>setColor("blue")}>blue</button>
          <button className="bg-black text-white p-1 px-4 rounded-full" onClick={()=>setColor("black")}>black</button>
        </div>
      </div>
    </>
  );
}

export default App;
