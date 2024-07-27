// components/Board/TaskCard.tsx
import { Task } from "../../types";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { title, description, status, priority, deadline } = task;

  const priorityColor = {
    Urgent: "text-urgent",
    Medium: "text-medium",
    Low: "text-low",
  };

  return (
    <div className="p-4 mb-4 bg-white shadow rounded">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className={`${priorityColor[priority]} font-semibold`}>
          {priority}
        </span>
        <span className="text-gray-500">{deadline}</span>
      </div>
    </div>
  );
};

export default TaskCard;
