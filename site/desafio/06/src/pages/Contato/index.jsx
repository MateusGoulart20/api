import { Link } from "react-router-dom";

export function Contato() {
    return (
        <>
            <h1>Minhas formas de contato:</h1>
            <li><a href="mailto:mateusgoulart20@hotmail.com">EMAIL</a></li>
            <Link to="/">Voltar</Link>
        </>
    );
}
