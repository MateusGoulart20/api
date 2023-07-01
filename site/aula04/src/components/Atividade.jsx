import { useState } from 'react';
import styles from './styles.module.css'

export function Atividade(props) {
    const [valor, mudarValor] = useState(0);
  
    function adicionar() {
      mudarValor(valor+1);
    }
    return (
      <div className={styles.container}>
        <h1>{valor}</h1>
        <button onClick={adicionar}>adicionar</button>
      </div>
    )
  }

