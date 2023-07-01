import { useState } from 'react';
import styles from './styles.module.css'

export function Somador(props) {
    const [resultado, mudarValor] = useState(0);
    let a=1;
    function somar() {
        switch (a) {
            case 3:
                mudarValor("Vermelho");
                a=1;
                break;
            case 1:
                mudarValor("Verde");
                a=2;
                break;
            case 2:
                mudarValor("Azul");
                a=3;
                break;
            default:
                break;
        }
        console.log(a)
    }
    return (
      <div className={styles.container}>
        <h1>{resultado}</h1>
        <button onClick={somar}>Adicionar</button>
      </div>
    )
  }

