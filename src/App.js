import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes/Routes';
import './App.css';

const App = () => {
    return (
        <main>
            <RouterProvider router={routes} />
        </main>
    );
};

export default App;