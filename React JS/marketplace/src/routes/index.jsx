// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

// Rotas
export const WebsiteRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
        </Routes>
    </BrowserRouter>
);