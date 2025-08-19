import { FaPlus } from "react-icons/fa6";
const Plus = () => {
  return (
    <div className="fixed bottom-2 right-2 p-5 ">
      <button
        className="cursor-pointer z-400  bg-primary text-white p-4 rounded-full hover:shadow-lg
                    transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <FaPlus size={24} />
      </button>
    </div>
  );
};

export default Plus;
