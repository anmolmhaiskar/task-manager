// pages/index.tsx
import TaskBoard from "../components/server/TaskBoard";
import { Task } from "../components/types";

const tasks: Task[] = [
  {
    title: "Implement User Authentication",
    description:
      "Develop and integrate user authentication using email and password.",
    status: "To do",
    priority: "Urgent",
    deadline: "2024-08-15",
    createdAt: "1 hr ago",
  },
  {
    title: "Design Home Page UI",
    description:
      "Develop and integrate user authentication using email and password.",
    status: "In progress",
    priority: "Medium",
    deadline: "2024-08-15",
    createdAt: "1 hr ago",
  },
  {
    title: "Integrate Cloud Storage",
    description: "Enable cloud storage for note backup and synchronization.",
    status: "Under review",
    priority: "Urgent",
    deadline: "2024-08-20",
    createdAt: "2 days ago",
  },
  {
    title: "Test Cross-browser Compatibility",
    description:
      "Ensure the app works seamlessly across different web browsers.",
    status: "Finished",
    priority: "Medium",
    deadline: "2024-07-30",
    createdAt: "4 days ago",
  },
  {
    title: "Conduct User Feedback Survey",
    description: "Collect and analyze user feedback to improve app features.",
    status: "In progress",
    priority: "Low",
    deadline: "2024-08-05",
    createdAt: "3 hr ago",
  },
];

export default function Home() {
  return (
    <div className="py-6">
      <TaskBoard tasks={tasks} />
    </div>
  );
}
