// components/TaskBoard.tsx
import { BsFilterLeft } from "react-icons/bs";
import useModal from "../../hooks/useModal";
import { Task } from "../types";
import BoardColumn from "./board/BoardColumn";

interface TaskBoardProps {
  tasks: Task[];
}

const TaskBoard = ({ tasks }: TaskBoardProps) => {
  const columns = {
    "To do": tasks.filter((task) => task.status === "To do"),
    "In progress": tasks.filter((task) => task.status === "In progress"),
    "Under review": tasks.filter((task) => task.status === "Under review"),
    Finished: tasks.filter((task) => task.status === "Finished"),
  };
  const { isOpen, openModal } = useModal();

  return (
    <div>
      <div>
        <input type="text" placeholder="Search" />
        <div>
          <button>Calender view</button>
          <button>Automation</button>
          <button>Filter</button>
          <button>Share</button>
          <div className="mt-2 text-center m-1">
            <button
              className="font-medium w-full px-3 p-2 text-white bg-indigo-800 rounded-md"
              onClick={openModal}
            >
              Create new task{" "}
              <span className="bg-white rounded-full ml-1 px-1 text-gray-700">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white border-1 shadow-md rounded-md">
        <div className="p-2">
          <div className="flex">
            {Object.keys(columns).map((column, index) => {
              return (
                <div
                  key={index}
                  className="w-1/4 p-2 flex items-center justify-between"
                >
                  <h2 className="text-lg">{column}</h2>
                  <BsFilterLeft
                    className="cursor-pointer scale-y-[-1] mr-2"
                    size={30}
                  />
                </div>
              );
            })}
          </div>
          <div className="h-80 flex overflow-y-scroll flex-grow">
            {Object.keys(columns).map((column, index) => (
              <BoardColumn key={index} tasks={columns[column]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
