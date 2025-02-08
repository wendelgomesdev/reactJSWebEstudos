import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Filme from './pages/Filme';
import Home from './pages/Home';
import Erro404 from './pages/404';

import Header from './components/Header';
import Favoritos from './pages/Favoritos';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<Filme />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='*' element={<Erro404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;