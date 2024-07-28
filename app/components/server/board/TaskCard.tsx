// components/Board/TaskCard.tsx
import { PiClockLight } from "react-icons/pi";
import { Task } from "../../types";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { title, description, status, priority, deadline, createdAt } = task;

  const priorityColor = {
    Urgent: "bg-urgent text-white",
    Medium: "bg-medium text-white",
    Low: "bg-low text-white",
  };

  return (
    <div className="flex flex-col gap-3 px-2 py-3 mb-4 bg-gray-50 shadow rounded-md border-x-2 border-y-2">
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="mt-2">
          <span
            className={`text-xs px-2 py-1.5 rounded-lg ${priorityColor[priority]}`}
          >
            {priority}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <PiClockLight size={30} />
        <span className="text-gray-500 text-sm font-semibold ml-1.5">
          {deadline}
        </span>
      </div>
      <div className="text-xs text-gray-500">{createdAt}</div>
    </div>
  );
};

export default TaskCard;
