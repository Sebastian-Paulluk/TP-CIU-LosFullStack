import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);