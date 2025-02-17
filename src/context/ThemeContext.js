import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(() => {
        return localStorage.getItem("lightMode") === "true";
    });

    useEffect(() => {
        localStorage.setItem("lightMode", lightMode);
        document.body.classList.toggle("light-mode", lightMode);
    }, [lightMode]);

    return (
        <ThemeContext.Provider value={{ lightMode, setLightMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
