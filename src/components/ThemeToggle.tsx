import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    /* store & update value of dark/light mode */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
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

        //Banner Logic:
        //Shows if user is in light mode and has not seen the banner
        const hasSeenBanner = localStorage.getItem("seenDarkModeNotice");
        if (!hasSeenBanner && storedTheme !=="dark"){
            setShowBanner(true);
            localStorage.setItem("seenDarkModeNotice","true");
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
        <>
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
        {/* Banner & toast */}
        {showBanner && (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900 text-white rounded-md shadow-lg text-sm flex items-center gap-3 z-50">
          <span>🌙 This site looks best in dark mode.</span>
          <button
            onClick={() => setShowBanner(false)}
            className="bg-primary/80 hover:bg-primary px-3 py-1 rounded-md text-xs font-medium"
          >
            Got it
          </button>
        </div>
        )}
        </>
    );
}