import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Projeto } from './pages/Projeto';
import { Experiencia } from './pages/Experiencia';
import { Sobre } from './pages/Sobre';
import { Contato } from './pages/Contato';

export function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/projeto' element={<Projeto />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/experiencia' element={<Experiencia />} />
            </Routes>
        </BrowserRouter>
    );
}
