import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Task Manager Dashboard
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl text-sm md:text-base">
          Organize your daily tasks, track progress, and stay productive.
          Manage pending and completed tasks in one simple dashboard.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/completed"
            className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            View Completed
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">

          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="font-semibold text-lg">Create Tasks</h2>
            <p className="text-sm text-gray-600 mt-2">
              Quickly add tasks with status and due dates.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="font-semibold text-lg">Track Progress</h2>
            <p className="text-sm text-gray-600 mt-2">
              Separate pending and completed tasks automatically.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h2 className="font-semibold text-lg">Stay Organized</h2>
            <p className="text-sm text-gray-600 mt-2">
              Keep your workflow clean and structured daily.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Start managing your tasks today
        </h2>

        <p className="mt-2 text-sm md:text-base text-blue-100">
          Simple, fast, and effective productivity dashboard.
        </p>

        <a
          href="/dashboard"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

    </main>
  );
}