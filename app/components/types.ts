export interface Task {
  title: string;
  description: string;
  status: "To do" | "In progress" | "Under review" | "Finished";
  priority: "Urgent" | "Medium" | "Low";
  deadline: string;
  createdAt: string;
}
