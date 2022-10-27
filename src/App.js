import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes/Routes';
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <main className='App' id={theme}>
                <RouterProvider router={routes} />
            </main>
        </ThemeContext.Provider>
    );
};

export default App;