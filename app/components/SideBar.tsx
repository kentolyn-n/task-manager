'use client'

import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
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

const inter = Inter({ subsets: ['latin']})

const links = [
    {name:'Create Tasks' , href: '/dashboard', icon: PencilSquareIcon},
    {name:'Completed Tasks', href: '/completed', icon: CheckIcon},
    {name:'Pending Tasks', href: '/pending', icon: ClockIcon},
    {name:'Trashbin', href: '/trashbin', icon: TrashIcon},
    {name:'Status', href: '/status', icon: ArrowTrendingUpIcon},
    {name:'About', href:'/about', icon: ExclamationCircleIcon}
]


export default function SideBar() {
    const pathname = usePathname();

    const { theme, toggleTheme } = useTheme();


    const icons = theme === "dark"
        ? <SunIcon className="w-10"/>
        : <MoonIcon className="w-6"/>;

    const toggleText = theme === "dark"
        ? "Dark Mode"
        : "Light Mode";

    return (
        <div className={`${inter.className} w-64 h-full-screen bg-[var(--background)] text-[var(--foreground)] border-r p-4`}>
            <h1 className="text-xl font-bold mb-6">
                Task Dashboard
            </h1>

           <nav className=" flex flex-col gap-3">
                {links.map((link) => {
                    const Linkicon = link.icon;
                    return(
                        <Link key={link.name}
                              href={link.href}
                              className={clsx(
                                'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                {
                                  'bg-sky-100 text-blue-600': pathname === link.href,
                                },
                              )}>
                            <Linkicon className="w-6"/>
                            <p className="hidden md:block">{link.name}</p> 
                        </Link>
                    )
                })}
           </nav>

           <div className="mt-8 border-t pt-4">
                <h1 className="font-semibold mb-2">Controls-Dashboard Pannel</h1>

                <div className="mb-2 mt-6">

                <button 
                  className="flex items-center text-left w-full p-4 rounded-md hover:bg-sky-100 dark:hover:bg-gray-100 active:scale-95 hover:text-blue-600 transition" 
                  onClick={toggleTheme}
                >
                    <span className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-2 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
                        {icons}
                    </span>
                    <span className="hidden md:block">{toggleText}</span>
                </button>

                </div>
           </div>
        </div>
    )
}