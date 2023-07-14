import { Link } from "react-router-dom";

export function Nav() {
    return (
        <>
            <ul class="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre Mim</Link></li>
                <li><Link to="/projeto">Projetos</Link></li>
                <li><Link to="/experiencia">Experiências</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </>
    );
}
