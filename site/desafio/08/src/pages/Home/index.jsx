import { useEffect, useState } from 'react';


export function Home() {
    const [perfil, setPerfil] = useState(0);
    const [repos, setRepos] = useState(0);
    useEffect(() => {
        getPerfil();
        setRepos();
    }, []);

    async function removeRepos(id) {
        try {
            const result = repos.filter(repo => repo.id !== id);
            
            await setRepos(result);
        } catch (error) {
            console.error(error);
        }
    }

    async function getPerfil(username) {
        try {
            let result, resulta;
            if (!username) {
                result = null;
            } else {
                result = await fetch(
                    `https://api.github.com/users/${username}`,
                    { method: 'GET' }
                );
                resulta = await fetch(
                    `https://api.github.com/users/${username}/repos`,
                    { method: 'GET' }
                );
            }

            setPerfil(await result.json());
            setRepos(await resulta.json());
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
            <p>email: {perfil.email}</p>
            {perfil.hireable && <p>👔: {perfil.hireable}</p>}
            {perfil.bio && <p>Bio: {perfil.bio}</p>}
            {perfil.twitter_username && <p>Twitter:{perfil.twitter_username}</p>}
            <p>Repositórios Publicos: {perfil.public_repos}</p>
            <p>Gists Públicos: {perfil.public_gists}</p>
            <p>Seguidores: {perfil.followers}</p>
            <p>Seguindo: {perfil.following}</p>
            {repos
                ? repos.map((repo, index) => (
                    <div className='cardFood' key={index}>
                        
                        <a href='https://github.com/MateusGoulart20/api' target='_blank'>
                            <p>
                                {repo.name}
                            </p>
                        </a>
                        <button
                            onClick={() => removeRepos(repo.id)}
                        >
                            Remover
                        </button>
                    </div>
                ))
                : <p className='listEmpty'>Lista Repositórios Vazia</p>
            }
        </>

    );
}
