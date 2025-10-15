import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    /* store & update value of dark/light mode */
    const [isDarkMode, setIsDarkMode] = useState(false);
    /* useEffect
    Initializes the theme based on saved preferences
    empty dependency = runs once
    */
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light"); //sets localStorage object with key/value pair-light
            setIsDarkMode(false);
        }
    }, [])
    /* triggers when theme toggle button is clicked */
    const toggleTheme = () => {
        if(isDarkMode) {
            /* removes dark mode and goes to default */
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light"); //sets localStorage object with key/value pair-light
            setIsDarkMode(false);
        } else{
            /* Set CSS to use the dark class */
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark"); /* in local device, display mode setting is remembered */
            setIsDarkMode(true);
        }
    }
    return (
        <button onClick={toggleTheme} className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outlin-hidden"
        )}>
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-400"/>
             ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
             )}
        </button>
            );
}