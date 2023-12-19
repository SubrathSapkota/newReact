import { useState } from "react";
import { Images } from "./images.jsx";
import Button from "./Button.jsx";

function App() {
  const [items, setItems] = useState(Images);

  const filterItems = (cateItems) => {
    const updateItems = Images.filter((currItem) => {
      return currItem.categories === cateItems;
    });
    setItems(updateItems);
  };

  const handleAll = () => {
    setItems(Images);
  };

  // search function
  const [search, setSearch] = useState("");

  const searchItems = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const searchHandle = (e) => {
    e.preventDefault();
    const updateItems = Images.filter((currItems) => {
      return currItems.categories === search;
    });
    setItems(updateItems);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-500">
        <div className="w-full flex h-80 flex-col items-center justify-center ">
          <h1 className="text-5xl font-bold mb-10">MY IMAGES</h1>
          <div className=" flex w-full items-center space-x-2 md:w-1/3 ">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Search"
              name="search"
              value={search}
              onChange={searchItems}
            />
            <button
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={searchHandle}
            >
              Search
            </button>
          </div>
          <div className="mt-5 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            {/* <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => filterItems("breakfast")}
            >
              Breakfast
            </button> */}

            <Button filterItems={filterItems} btnName={"breakfast"} />
            <Button filterItems={filterItems} btnName={"lunch"} />
            <Button filterItems={filterItems} btnName={"dinner"} />

            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleAll}
            >
              All
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center  ">
          <div className="py-6 px-6 grid grid-cols-4 gap-6 bg-cyan-800">
            {items.map((item, index) => (
              <div key={index} className="">
                <img
                  className="h-56 w-56 object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
