// components/TaskBoard.tsx
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

  return (
    <div className="flex">
      {Object.keys(columns).map((column, index) => (
        <BoardColumn key={index} title={column} tasks={columns[column]} />
      ))}
    </div>
  );
};

export default TaskBoard;
