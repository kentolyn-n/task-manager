"use client";

import { getTasks, Task } from "@/app/lib/task";
import { useEffect, useState } from "react";
import TaskCards from "@/app/components/taskCards";
export default function Pending() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = () => {
    const data = getTasks().filter((t)=> t.status === "pending");
    setTasks(data);
  }

  useEffect(() => {
    loadTasks()
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pending Tasks</h1>

      {tasks.length === 0 && (
        <div className="min-h-screen text-center text-gray-500 border border-dashed p-6 rounded-xl">
          <div className="p-50 flex justify-center">
          No Pending Tasks Here.
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 ld:grid-cols-3">
        {tasks.map((t) => (
          <TaskCards key={t.id} task={t} onDelete={loadTasks} />
        ))}
      </div>
    </div>
  );
}