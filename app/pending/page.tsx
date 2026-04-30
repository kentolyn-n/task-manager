"use client";

import { getTasks, Task } from "@/app/lib/task";
import { useEffect, useState } from "react";
import TaskCards from "@/app/components/taskCards";

export default function Pending() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = () => {
    const data = getTasks().filter((t) => t.status === "pending");
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-10">

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold">
        Pending Tasks
      </h1>

      {/* Empty State */}
      {tasks.length === 0 && (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center text-gray-500 border border-dashed p-6 sm:p-10 rounded-xl w-full max-w-md">
            No Pending Tasks Here.
          </div>
        </div>
      )}

      {/* Task Grid */}
      {tasks.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t) => (
            <TaskCards key={t.id} task={t} onDelete={loadTasks} />
          ))}
        </div>
      )}

    </div>
  );
}