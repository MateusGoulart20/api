import { useState } from 'react';
import styles from './styles.module.css'

export function Info(props) {
    const [nome, setNome] = useState('');
    const [text, setText] = useState('');

    function mudarNome() {
        setNome(text);
    }

    return (
      <div className={styles.container}>
        <h1>{nome}</h1>
        <input type="text" value={text} id='entrada' onChange={(e) => setText(e.target.value)}/>
        <button onClick={mudarNome}>adicionar</button>
      </div>
    )
  }

