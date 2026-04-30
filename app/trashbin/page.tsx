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
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trash Bin</h1>

        {tasks.length > 0 && (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            <TrashIcon className="w-5 h-5" />
            Delete All
          </button>
        )}
      </div>

      {/* Empty State */}
      {tasks.length === 0 && (
        <div className="min-h-screen text-center text-gray-500 border border-dashed p-6 rounded-xl">
          <div className="p-50 flex justify-center">
          Trash is empty.
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((t) => (
          <TaskCards key={t.id} task={t} />
        ))}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl space-y-4 w-[320px] text-center shadow-lg">
            
            <h2 className="text-lg font-semibold">
              Delete all tasks?
            </h2>

            <p className="text-sm text-gray-500">
              This will permanently remove all tasks from trash.
            </p>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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