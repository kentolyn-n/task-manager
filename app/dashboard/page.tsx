import TaskForm from "@/app/components/createtasks";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Home Dashboard</h1>
        <p className="text-sm text-gray-500">
          Create and manage your daily tasks.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex gap-8">

        {/* Left: Task Form */}
        <div className="flex-1">
          <TaskForm />
        </div>

        {/* Right: Info Panel */}
        <div className="flex-1 hidden lg:flex items-center justify-center">
          
          <div className="space-y-6 max-w-md">
            
            <h2 className="text-2xl font-bold leading-snug">
              Stay organized. Stay consistent.
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Your daily tasks are the foundation of productivity.
              Break your goals into simple actions, track your progress,
              and build consistency over time.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              With this dashboard, you can manage tasks by status,
              set due dates, and keep your workflow clean and structured.
              Every completed task brings you one step closer to your goals.
            </p>

            <div className="pt-2">
              <p className="font-semibold text-blue-600">
                “Small progress every day leads to big results.”
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Footer message */}
      <div className="rounded-xl border border-dashed text-center p-6 text-sm text-gray-500">
        THANK YOU FOR COMPLETING TASK.
      </div>

    </div>
  );
}