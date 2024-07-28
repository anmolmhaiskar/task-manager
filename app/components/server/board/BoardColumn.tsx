// components/Board/BoardColumn.tsx
import { Task } from "../../types";
import AddTaskCard from "./AddTaskCard";
import TaskCard from "./TaskCard";

interface BoardColumnProps {
  tasks: Task[];
}

const BoardColumn = ({ tasks }: BoardColumnProps) => {
  return (
    <div className="w-1/4 p-2">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
      <AddTaskCard />
    </div>
  );
};

export default BoardColumn;
