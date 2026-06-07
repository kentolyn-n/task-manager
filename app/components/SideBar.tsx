'use client';

import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  ArrowTrendingUpIcon,
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
  SunIcon,
  MoonIcon,
  ExclamationCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { useTheme } from "@/app/context/ThemeToggle";

const inter = Inter({ subsets: ['latin'] });

const links = [
  { name: 'Create Tasks', href: '/dashboard', icon: PencilSquareIcon },
  { name: 'Completed Tasks', href: '/completed', icon: CheckIcon },
  { name: 'Pending Tasks', href: '/pending', icon: ClockIcon },
  { name: 'Trashbin', href: '/trashbin', icon: TrashIcon },
  { name: 'Status', href: '/status', icon: ArrowTrendingUpIcon },
  { name: 'About', href: '/about', icon: ExclamationCircleIcon }
];

export default function SideBar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const icons =
    theme === "dark"
      ? <SunIcon className="w-8 sm:w-10" />
      : <MoonIcon className="w-6 sm:w-7" />;
      

  const toggleText =
    theme === "dark" ? "Dark Mode" : "Light Mode";

  return (
    <div className={`${inter.className} w-30 lg:w-64 h-screen bg-[var(--background)] text-[var(--foreground)] border-r lg:p-4 lg:items-start items-center flex flex-col`}>

      {/* Title */}
      <h1 className="hidden lg:block text-xl font-bold mb-6">
        Task Dashboard
      </h1>

      {/* Nav */}
      <nav className="flex flex-col gap-3 flex-1">
        {links.map((link) => {
          const Linkicon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[48px] items-center gap-2 rounded-md p-3 text-sm font-medium transition",
                "hover:bg-sky-100 hover:text-blue-600 dark:hover:bg-gray-700",
                {
                  "bg-sky-100 text-blue-600 dark:bg-gray-700":
                    pathname === link.href,
                }
              )}
            >
              <Linkicon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}

        {/* Controls */}
      <div className="border-t pt-4 mt-4">

        <h1 className="font-semibold mb-2 hidden lg:block">
          Controls Dashboard Panel
        </h1>

        <button
          className="flex items-center w-full p-3 rounded-md hover:bg-sky-100 dark:hover:bg-gray-700 active:scale-95 transition hover:text-gray-600"
          onClick={toggleTheme}
        >
          <span className="flex items-center gap-2 items-center lg:items-start">
            {icons}
          </span>

          <span className="hidden md:block ml-3 text-sm">
            {toggleText}
          </span>
        </button>

      </div>
      </nav>
    </div>
  );
}