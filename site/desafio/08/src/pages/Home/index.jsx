import { useEffect, useState } from 'react';


export function Home() {
    const [perfil, setPerfil] = useState(0);
    useEffect(() => {
        getPerfil();
    }, []);

    async function getPerfil(username) {
        try {
            let result;
            if (!username) {
                result = null;
            } else {
                result = await fetch(
                    `https://api.github.com/users/${username}`,
                    { method: 'GET' }
                );
            }
            const data = await result.json();
            setPerfil(data);
        } catch (error) {
            console.error(error);
        }
    }
    async function atualizar(){
        var input = document.querySelector("#entrada");
        var texto = input.value;
        getPerfil(texto);
    }
    function Perfil(props){
        console.log("entrada"+props)
        var retorno = <a href={perfil.html_url} target="_blanck"><h1>{perfil.login}</h1></a>;
        //if(props.name)
        //retorno += <p>Nome: {perfil.name}</p>
        return retorno;
    }
    return (

        <>
            <input type="search" id="entrada"></input><button onClick={atualizar}>Buscar</button>
            <a href={perfil.html_url} target="_blanck"><h1>{perfil.login}</h1></a>
            <p>Nome: {perfil.name}</p>
            <p>📌: {perfil.location}</p>
            <p>✉️: {perfil.email}</p>
            <p>👔: {perfil.hireable}</p>
            <p>Bio: {perfil.bio}</p>
            <p>Twitter:{perfil.twitter_username}</p>
            <p>Repositórios Publicos: {perfil.public_repos}</p>
            <p>Gists Públicos: {perfil.public_gists}</p>
            <p>Seguidores: {perfil.followers}</p>
            <p>Seguindo: {perfil.following}</p>
            
        </>

    );
}
