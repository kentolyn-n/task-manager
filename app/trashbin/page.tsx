"use client";

import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { getTrashs, clearTrash, Task } from "@/app/lib/task";
import TaskCards from "@/app/components/taskCards";

export default function TrashBin() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);

  const loadTrash = () => {
    const data = getTrashs();
    setTasks(data);
  };

  useEffect(() => {
    loadTrash();
  }, []);

  const handleConfirmDelete = () => {
    clearTrash();
    setShowModal(false);
    setTasks([]);
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <h1 className="text-2xl sm:text-3xl font-bold">
          Trash Bin
        </h1>

        {tasks.length > 0 && (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full sm:w-auto"
          >
            <TrashIcon className="w-5 h-5" />
            Delete All
          </button>
        )}

      </div>

      {/* Empty State */}
      {tasks.length === 0 && (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center text-gray-500 border border-dashed p-6 sm:p-10 rounded-xl w-full max-w-md">
            Trash is empty.
          </div>
        </div>
      )}

      {/* Cards */}
      {tasks.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t) => (
            <TaskCards key={t.id} task={t} />
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl space-y-4 w-full max-w-sm text-center shadow-lg">

            <h2 className="text-lg font-semibold">
              Delete all tasks?
            </h2>

            <p className="text-sm text-gray-500">
              This action will permanently remove all tasks from trash.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100 w-full sm:w-auto"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto"
              >
                Confirm
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}