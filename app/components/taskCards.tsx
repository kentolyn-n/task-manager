import { TrashIcon } from "@heroicons/react/24/outline";
import { Task, moveToTrash} from '@/app/lib/task';

type props = {
    task: Task;
    onDelete?:()=>void
};

export default function TaskCards({task, onDelete}:props) {
    const handleDelete = () => {
        moveToTrash(task);
        onDelete?.();
    };
    return (
        <div className="relative rounded-xl border border-white/10 shadow-lg p-4 hover:shadow-xl transition backdrop-blur-lg bg-white/10 dark:bg-white/10">

      {/* Trash Button */}
      <button
        onClick={handleDelete}
        className="absolute top-3 right-3 p-1 rounded hover:bg-red-100 transition"
      >
        <TrashIcon className="w-5 h-5 text-red-500" />
      </button>

      {/* Task Title */}
      <p className="text-base font-medium pr-8 break-words">
        {task.task}
      </p>

      {/* Status + Date */}
      <div className="mt-3 text-sm flex flex-col gap-1">
         <span
          className={
            task.status === "pending"
              ? "text-yellow-600 font-medium"
              : "text-green-600 font-medium"
          }
        >
          {task.status === "pending" ? "Pending" : "Completed"}
        </span>

        <span className="text-gray-500">
          {task.status === "pending"
            ? `Due: ${task.date}`
            : `Completed: ${task.date}`}
        </span>
      </div>
      </div>
    );
}