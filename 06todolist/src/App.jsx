import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const generateUniqueId = () => {

    return  Math.random().toString(36).substr(2, 9);
  };

  const [inputValue, setInputValue] = useState({
    title: "",
    desc: "",
    check: false,
  });

  const [updateTodos, setUpdateTodos] = useState(null);

  const handleValueChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateTodos !== null) {
      const newUpdateTodos = [...todos];
      newUpdateTodos[updateTodos] = {
        id: todos[updateTodos].id,
        title: inputValue.title,
        desc: inputValue.desc,
      };
      setTodos(newUpdateTodos);
      setUpdateTodos(null);
    } else {
      setTodos([...todos,{ ...inputValue,id: generateUniqueId()} ]);
    }
    console.log(todos);
   
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    setInputValue({
      title: todos[index].title,
      desc: todos[index].desc,
    });
    setUpdateTodos(index);
  };

  const handleCheckBox = (index) => {
    const newTodosCheck = [...todos];
    newTodosCheck[index].check = !newTodosCheck[index].check;
    setTodos(newTodosCheck);
  };

  return (
    <div className="w-full h-screen bg-gray-500 flex justify-center items-center ">
      <div className="w-[80%] h-[85%] bg-slate-600 rounded-[30px] flex items-center flex-col">
        <h1 className="text-white text-4xl font-bold mt-5">ToDo List</h1>
        <div className="w-full px-12 my-8 flex justify-between">
          <input
            type="text"
            name="title"
            className="w-[27%] h-10 text-2xl rounded-lg px-2"
            placeholder="Title"
            value={inputValue.title}
            onChange={handleValueChange}
          />
          <input
            type="text"
            name="desc"
            className="w-[62%] h-10 text-2xl rounded-lg px-2"
            placeholder="Descriptions"
            value={inputValue.desc}
            onChange={handleValueChange}
          />
          <button
            className="bg-cyan-400 text-white rounded-md w-[100px] text-xl font-bold"
            onClick={handleSubmit}
          >
            ADD
          </button>
        </div>
        <div className=" w-full h-full mb-9 rounded-b-3xl px-12 grid grid-cols-4 gap-5 overflow-auto no-scrollbar">
          {todos.map((items, index) => (
            <div
              className="h-[250px]  py-2 px-2 relative "
              key={index}
              style={{ backgroundColor: items.check ? "#fe9293" : "white" }}
            >
              <input
                type="checkbox"
                className="absolute right-2 h-5 w-5"
                onClick={() => handleCheckBox(index)}
              />
              <h1 className="font-bold text-xl">{items.title}</h1>
              <div>
                <p className=" text-lg overflow-hidden">{items.desc}</p>
              </div>
              <div className="">
                <button
                  className="bg-cyan-500 text-white py-1 px-4  w-[80px] font-bold rounded-lg absolute bottom-2 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-violet-300 "
                  onClick={() => handleEdit(index)}
                  disabled={items.check}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-4 w-[80px] font-bold rounded-lg absolute bottom-2 right-2 hover:bg-red-600 "
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
