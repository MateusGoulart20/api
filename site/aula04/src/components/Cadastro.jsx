import { useState } from 'react';
import styles from './styles.module.css'

export function Cadastro(props) {
    let [valor, mudarValor] = useState(0);
    valor = ['Roberto','Geruscleusa'];
    function adicionar() {
        const val = document.querySelector('#banana').value;
        console.log(val);
        valor.add(val)
        mudarValor();
    }
    return (
      <div className={styles.container}>
        {valor.forEach(element => {
            return <p>{element}</p>
        })}
        <h1>{valor}</h1>
        <input type='text' placeholder='Entrada' id='banana'/>
        <button onClick={adicionar}>adicionar</button>
      </div>
    )
  }

