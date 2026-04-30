"use client";

export default function AboutPage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">About This Project</h1>
        <p className="text-sm opacity-70 mt-2">
          A simple task management dashboard built for productivity and clarity.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 rounded-xl border bg-[var(--background)] text-[var(--foreground)]">
          <h2 className="text-xl font-semibold mb-3">Purpose</h2>
          <p className="leading-relaxed">
            This project helps users organize daily tasks by separating them into
            pending and completed states. It focuses on simplicity, speed, and
            clarity so users can manage their workflow without distraction.
          </p>
        </div>

        <div className="p-6 rounded-xl border bg-[var(--background)] text-[var(--foreground)]">
          <h2 className="text-xl font-semibold mb-3">Features</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Create and manage tasks easily</li>
            <li>Pending & completed task separation</li>
            <li>Local storage persistence</li>
            <li>Dark / light theme toggle</li>
            <li>Trashbin for deleted tasks</li>
          </ul>
        </div>
      </div>

      {/* Footer section */}
      <div className="p-6 rounded-xl border bg-[var(--background)] text-[var(--foreground)] text-center">
        <p className="text-sm opacity-70">
          Built with focus on learning, scalability, and real-world structure.
        </p>
      </div>
        {/* Copyright */}
        <footer className="pt-6">
        <div className="p-4 rounded-xl border bg-[var(--background)] text-[var(--foreground)] text-center text-sm opacity-80">
            © {new Date().getFullYear()} Task Dashboard. All rights reserved.
        </div>
        </footer>
    </div>
  );
}