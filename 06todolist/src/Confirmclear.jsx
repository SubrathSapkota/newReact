import PropTypes from "prop-types";

const Confirmclear = ({ onClose, onConfirm }) => {
  return (
    <div className="w-full h-screen bg-black bg-opacity-20 backdrop-blur-xs flex items-center justify-center fixed ">
      <div className="h-44 w-96 bg-gray-200 px-4 py-4 rounded-2xl flex flex-col justify-around">
        <h1 className="text-2xl font-bold">Confirm Delete</h1>
        <p className="text-lg ">Are you sure you want to clear all?</p>
        <div className="btngroup flex justify-end gap-4">
          <button
            className="bg-red-700 text-lg text-white py-1 px-4 w-[80px] font-bold rounded-lg hover:bg-red-600 "
            onClick={() => onClose()}
            aria-label="No, cancel"
          >
            No
          </button> 
          <button
            className="bg-green-700 text-lg text-bold text-white py-1 px-4 w-[80px] font-bold rounded-lg  hover:bg-green-600 "
            onClick={() => {
              onConfirm();
            }}
            aria-label="Yes, confirm"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
Confirmclear.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Confirmclear;
