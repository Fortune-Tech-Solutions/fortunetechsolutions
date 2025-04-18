import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { useEffect } from 'react';

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [darkTheme, setDarkTheme] = useState(false);


     useEffect(() => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
    
            if (theme == "black") {
                setDarkTheme(true);
            } else {
                setDarkTheme(false);
            }
    
        }, [theme, setDarkTheme]);

    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme, theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
