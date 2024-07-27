// components/Board/BoardColumn.tsx
import { Task } from "../../types";
import AddTaskCard from "./AddTaskCard";
import TaskCard from "./TaskCard";

interface BoardColumnProps {
  title: string;
  tasks: Task[];
}

const BoardColumn = ({ title, tasks }: BoardColumnProps) => {
  return (
    <div className="w-1/4 p-2">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
      <AddTaskCard />
    </div>
  );
};

export default BoardColumn;
