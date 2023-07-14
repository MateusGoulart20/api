import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Repositorio } from './pages/Repositorio';

export function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/repositorio' element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    );
}
/*
Crie uma aplicação utilizando React, faça uma página de portifólio que
consumirá a API pública do GitHub, sua aplicação deve pedir o nome do
usuário do GitHub e buscar esses dados.
Pega dados do perfil do GitHub
https://api.github.com/users/<USERNAME>
Pega dados dos repositórios públicos do GitHub
https://api.github.com/users/<USERNAME>/repos
Utilizando Hooks, crie essas funcionalidades e exiba de forma responsiva.
Crie outras funções criativas, por exemplos, um feedback de loading
enquanto busca os dados, uma opção para exibir ou não um repositório,
crie uma rota para mostrar mais detalhes de um repositório etc.
*/