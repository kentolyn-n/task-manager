"use client";

import { useState } from "react";
import {
  PencilSquareIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { addTask } from "@/app/lib/task";
import { useRouter } from "next/navigation";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState<"pending" | "done">("pending");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      task,
      status,
      date,
    };

    addTask(newTask);

    setTask("");
    setStatus("pending");
    setDate("");

    router.push(status === "pending" ? "/pending" : "/completed");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl space-y-4 rounded-xl border p-4 sm:p-6 shadow-sm bg-[var(--background)] text-[var(--foreground)]"
    >

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
        <PencilSquareIcon className="w-5 sm:w-6 h-5 sm:h-6" />
        Create Task
      </h2>

      {/* Textarea */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          Task Description
        </label>

        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          rows={4}
          placeholder="Write your task here..."
          className="w-full rounded-md border p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Status */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          Status
        </label>

        <div className="relative">
          <CheckCircleIcon className="absolute left-3 top-3 w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "pending" | "done")
            }
            className="w-full rounded-md border p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>

      {/* Date */}
      <div >
        <label className="mb-1 block text-sm font-medium">
          {status === "pending" ? "Due Date" : "Completed Date"}
        </label>

        <div className="relative">
          <CalendarDaysIcon className="absolute left-3 top-3 w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border p-3 pl-10 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition w-full sm:w-auto justify-center"
      >
        <PaperAirplaneIcon className="w-5 h-5" />
        Add Task
      </button>

    </form>
  );
}