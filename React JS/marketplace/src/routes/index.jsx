// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Sobre } from '../pages/About';

// Routes
export const WebsiteRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/sobre' element={<Sobre />} />
        </Routes>
    </BrowserRouter>
);

