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

  const handleSubmit = (e: React.FormEvent ) => {
    e.preventDefault(); // stops sending data to server

    const newTask = {
      id: crypto.randomUUID(),
      task,
      status,
      date,
    };

    addTask(newTask); // use locally

    setTask("");
    setStatus("pending");
    setDate("");

    router.push(status === "pending" ? "/pending" : "/completed");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl space-y-4 rounded-xl border p-6 shadow-sm bg-[var(--background)] text-[var(--foreground)]"
    >
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <PencilSquareIcon className="w-6 h-6" />
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
          className="w-full rounded-md border p-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Status */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          Status
        </label>

        <div className="relative">
          <CheckCircleIcon className="absolute left-3 top-3 w-5 h-5 text-gray-500" />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "pending" | "done")}
            className="w-full rounded-md border p-3 pl-10 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="mb-1 block text-sm font-medium">
          {status === "pending" ? "Due Date" : "Completed Date"}
        </label>

        <div className="relative">
          <CalendarDaysIcon className="absolute left-3 top-3 w-5 h-5 text-gray-500" />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border p-3 pl-10 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        <PaperAirplaneIcon className="w-5 h-5" />
      </button>
    </form>
  );
}