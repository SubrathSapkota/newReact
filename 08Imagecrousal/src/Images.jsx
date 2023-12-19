
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

function Images() {
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

  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === Images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? Images.length - 1 : current - 1);
  }

  

  return (
    <>
      <div className="w-full h-screen flex j flex-col">
        <h1 className="text-slate-600 text-4xl font-bold">Image Crousal</h1>
        <div className=" flex justify-center items-center mt-10">
          <button
            className="h-12 w-12 flex justify-center items-center"
            onClick={nextSlide}
          >
            <FaArrowLeft />
          </button>
          
          {Images.map(
          (image, index) =>
            current === index &&(
              <div key={image} className="slide">
                <img src={image} alt="images" className="h-96"/>
              </div>
            )
        )}
          
          <button
            className="h-12 w-12 flex justify-center items-center"
            onClick={prevSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Images;
