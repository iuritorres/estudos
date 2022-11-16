// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/';
import { Sobre } from '../pages/Sobre/';

// Routes
export const WebsiteRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />     
            </Routes>
        </BrowserRouter>
    );
};

