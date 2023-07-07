import { Link } from "react-router-dom";
import { Nav } from "./../Nav"


export function Sobre() {
    return (
        <>
            <Nav />
            <h1>Sobre mim</h1>
            <p>Mateus Goulart Añez</p>
            <p>Técnico em Informática pelo o <abbr>IFMT</abbr></p>
            <p>Estudante de Engenharia da Computação pelo o <abbr>IFMT</abbr></p><br />
            
            <a href="https://github.com/MateusGoulart20" target="_blanck">GitHub </a>
            <a href="https://www.linkedin.com/in/mateus-goulart-903756246/" target="_blanck"> Likedin</a><br />
            <Link to="/">Voltar</Link><br />
        </>
    );
}
