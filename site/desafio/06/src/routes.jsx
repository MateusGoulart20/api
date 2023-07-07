import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ErroLogin } from './pages/ErroLogin';
import { Sobre } from './pages/Sobre';
import { Contato } from './pages/Contato';

export function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route index path='/login' element={<Login />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/errologin' element={<ErroLogin />} />
            </Routes>
        </BrowserRouter>
    );
}

/**
 * \: raiz
\login: página de login
\sobre: página sobre
\contato: página de contato
\errologin: página de erro de login
 */