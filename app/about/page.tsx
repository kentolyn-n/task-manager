"use client";

export default function AboutPage() {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-10">

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          About This Project
        </h1>

        <p className="text-sm sm:text-base opacity-70 mt-2 max-w-2xl">
          A simple task management dashboard built for productivity and clarity.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

        <div className="p-4 sm:p-6 rounded-xl border bg-[var(--background)] text-[var(--foreground)]">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Purpose
          </h2>

          <p className="text-sm sm:text-base leading-relaxed">
            This project helps users organize daily tasks by separating them into
            pending and completed states. It focuses on simplicity, speed, and
            clarity so users can manage their workflow without distraction.
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-xl border bg-[var(--background)] text-[var(--foreground)]">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Features
          </h2>

          <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
            <li>Create and manage tasks easily</li>
            <li>Pending & completed task separation</li>
            <li>Local storage persistence</li>
            <li>Dark / light theme toggle</li>
            <li>Trashbin for deleted tasks</li>
          </ul>
        </div>

      </div>

      {/* Footer section */}
      <div className="p-4 sm:p-6 rounded-xl border bg-[var(--background)] text-[var(--foreground)] text-center hidden lg:block">
        <p className="text-xs sm:text-sm opacity-70">
          Built with focus on learning, scalability, and real-world structure.
        </p>
      </div>

      {/* Copyright */}
      <footer className="pt-4 sm:pt-6">
        <div className="p-3 sm:p-4 rounded-xl border bg-[var(--background)] text-[var(--foreground)] text-center text-xs sm:text-sm opacity-80">
          © {new Date().getFullYear()} Task Dashboard. All rights reserved.
        </div>
      </footer>

    </div>
  );
}