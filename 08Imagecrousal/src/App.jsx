import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./App.css";
import Image0 from "./Image/Image0.jpg";
import Image1 from "./Image/Image1.jpg";
import Image2 from "./Image/Image2.jpg";
import Image3 from "./Image/Image3.jpg";
import Image4 from "./Image/Image4.jpg";
import Image5 from "./Image/Image5.jpg";
import Image6 from "./Image/Image6.jpg";
import Image7 from "./Image/Image7.jpg";

import { useState } from "react";

function App() {
  const Images = [
    Image0,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
  ];

  const [count, setCount] = useState(0);

  const [image, setImage] = useState(Images[0]);

  const handelClickLeft = () => {
    count === 0
      ? (setCount(Images.length - 1), setImage(Images[Images.length - 1]))
      : (setCount(count - 1), setImage(Images[count - 1]));
  };
  const handelClickRight = () => {
    count === Images.length - 1
      ? (setCount(0), setImage(Images[0]))
      : (setCount(count + 1), setImage(Images[count + 1]));
  };

  return (
    <>
      <div className="w-full h-screen flex j flex-col">
        <h1 className="text-slate-600 text-4xl font-bold">Image Crousal</h1>
        <div className=" flex justify-center items-center mt-10">
          <button
            className="h-12 w-12 flex justify-center items-center"
            onClick={handelClickLeft}
          >
            <FaArrowLeft />
          </button>
          <img src={image} alt="" className="h-96" />
          <p>{count}</p>
          <button
            className="h-12 w-12 flex justify-center items-center"
            onClick={handelClickRight}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
