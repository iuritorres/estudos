// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

// Routes
export const WebsiteRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />            
            </Routes>
        </BrowserRouter>
    );
};

