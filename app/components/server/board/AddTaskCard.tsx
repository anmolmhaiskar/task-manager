import { GoPlus } from "react-icons/go";
const AddTaskCard = () => {
  return (
    <button className="w-full p-2 text-left bg-black border rounded-lg text-sm text-white hover:bg-gray-700">
      <div className="flex justify-between items-center">
        <span>Add new</span>
        <GoPlus size={25} />
      </div>
    </button>
  );
};

export default AddTaskCard;
