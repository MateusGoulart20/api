import { useState } from "react";

function Button(props) {
    if (props.icon) {
        return (
            <button>
                {props.icon}
            </button>
        )
    }

    return (
        <button>
            Botão
        </button>
    )
}

export function App() {
    const lista = ['Marcos', 'João', 'Pedro', 'Lucas'];
    const [idade, setIdade] = useState(0);

    return (
        <div>
            {lista.map((item, index) => <p key={index}>{item}</p>)}
            <input type="number" placeholder="Digite sua idade" onChange={(e) => {
                setIdade(e.target.value);
            }} />
            {idade >= 18
                ? <p>Você é maior de idade</p>
                : <p>Você é menor de idade</p>
            }
            <Button icon="👨‍💻" />
        </div>
    );
}
