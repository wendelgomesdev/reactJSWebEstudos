import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';
import Erro404 from './pages/404';
import Produto from './pages/Produto';

import './style-rotas.css'

function Rotas() {

    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/produto/:id' element={<Produto />} />

            <Route path='*' element={<Erro404 />} />
        </Routes>
        </BrowserRouter>
    );
} 

export default Rotas;
