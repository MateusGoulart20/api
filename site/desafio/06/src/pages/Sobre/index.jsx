import { Link } from "react-router-dom";

export function Sobre() {
    return (
        <>
            <h1>Mateus Goulart Añez</h1>
            <ul>
                <li>Técnico em Informática pelo o <abbr>IFMT</abbr></li>
                <li>Estudante de Engenharia da Computação pelo o <abbr>IFMT</abbr></li>
            </ul>
            <a href="https://github.com/MateusGoulart20" target="_blanck">GitHub</a><br />
            <a href="https://www.linkedin.com/in/mateus-goulart-903756246/" target="_blanck">Likedin</a><br />
            <Link to="/contato">Entre em contato!</Link><br />
            <Link to="/">Voltar</Link><br />
        </>
    );
}
