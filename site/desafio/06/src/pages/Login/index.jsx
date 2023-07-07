import { Link } from "react-router-dom";

export function Login() {
    return (
        <>
            <h1>Login</h1>
            <input type="text" placeholder="Usuário"/>
            
            <Link to="/erroLogin">Cancelar</Link>
            <Link to="/sobre">Entrar</Link>
        </>
    );
}
