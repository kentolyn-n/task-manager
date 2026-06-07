"use client";

import { useEffect, useState } from "react";
import { Task, getTasks } from "@/app/lib/task";

export default function StatusPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "pending").length;
  const completed = tasks.filter((t) => t.status === "done").length;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 10);

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-10">

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold">
        Task Status Overview
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="p-5 rounded-xl border bg-[var(--background)] text-[var(--foreground)]">
          <h2 className="text-lg font-semibold">Total Tasks</h2>
          <p className="text-2xl font-bold">{total}</p>
        </div>

        <div className="p-5 rounded-xl border bg-[var(--background)] text-[var(--foreground)]">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-2xl font-bold text-yellow-500">{pending}</p>
        </div>

        <div className="p-5 rounded-xl border bg-[var(--background)] text-[var(--foreground)]">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-2xl font-bold text-green-500">{completed}</p>
        </div>

      </div>

      {/* Progress Card */}
      <div className="p-5 rounded-xl border bg-[var(--background)] text-[var(--foreground)]">
        <h2 className="text-lg font-semibold mb-2">Progress</h2>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 bg-green-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-sm">{progress}% completed</p>
      </div>

      {/* Productivity Insight (separate section) */}
      <div className="p-6 rounded-xl border bg-[var(--background)] text-[var(--foreground)] space-y-4 leading-relaxed">

        <h2 className="text-lg font-semibold">
          Productivity Insight
        </h2>

        <p>
          Your task management system is designed to help you stay focused on
          what matters most.
        </p>

        <p className="hidden lg:block">
          Consistency is more important than intensity. Completing small tasks
          regularly builds momentum, which leads to long-term productivity growth.
          Try to maintain a steady workflow rather than rushing everything at once.
        </p>

        <p className="hidden lg:block">
          Pending tasks represent your active responsibilities. Prioritize them
          based on urgency and deadlines. Completed tasks are a reflection of
          your progress — review them to understand your performance patterns.
        </p>

        <p className="hidden lg:block">
          Keep your workspace clean, your goals clear, and your focus aligned.
          A well-structured task system reduces stress and increases clarity in
          daily execution.
        </p>

      </div>

    </div>
  );
}