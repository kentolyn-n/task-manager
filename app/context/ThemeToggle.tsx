"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = "light" | "dark";

type ThemeContextType = {
    theme : Theme,
    toggleTheme : ()=> void
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeContextProvider({children} : {children : React.ReactNode}) {

    const [theme, setTheme] = useState<Theme>("light");

    useEffect(()=>{
        const stored = localStorage.getItem("theme");
        if(stored === "light" || stored ==="dark")
            setTheme(stored)
    }, []);

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", theme ==="dark")
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme =() =>{
        setTheme((prev)=> (prev ==="light" ? "dark":"light"))
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx  = useContext(ThemeContext);
    if(!ctx) throw new Error ("useTheme must be use inside themeProvider");
    return ctx
}