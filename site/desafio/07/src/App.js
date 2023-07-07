import './App.css';
import React from 'react';

import { Navigations } from './routes';

export default function App() {
  return (
    <div className='App'>
      
      <br></br>
      <div>
        <Navigations />
      </div>
    </div>
    
    
  )
  }
/**
 * Crie uma estrutura de componentes react para atender a seguinte
navegação:
\: raiz
\login: página de login
\sobre: página sobre
\contato: página de contato
\errologin: página de erro de login
 */
