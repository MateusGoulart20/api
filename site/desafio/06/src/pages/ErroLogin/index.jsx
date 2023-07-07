import { Link } from 'react-router-dom';
const API_URL = 'http://localhost:8080';

export function ErroLogin() {
    
    return (
        <>
            <h1>Erro ao tentar fazer login</h1>
            <Link to="/login">Tente de novo</Link>
        </>
    );
}
