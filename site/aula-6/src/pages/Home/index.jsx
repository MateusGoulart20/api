import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const API_URL = 'http://localhost:8080';

export function Home() {
    const [foods, setFoods] = useState(null)
    // Essa função vai ser executada quando
    // o componente for redenrizado
    useEffect(() => {
        getFoods();
    },[])

    async function getFoods(){
        try {
            const result = await fetch(
                `${API_URL}/foods`,
                { method: 'GET' }
            );
            const data = await result.json();
            setFoods(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    async function removeFood(id){
        console.log(id);
        try {
            const result = await fetch(`${API_URL}/food/${id}`,
                {method:'DELETE'});
            const data = await result.json();
            //alert(data.message);
            await getFoods();
        } catch (error) {
            console.log(error);
        }
    }

    //const result = fetch('/foods',{method: 'GET'})
    //{result  && (<p>{result}</p>)}
    return (
        <>
            <h1>Home</h1>
            {foods 
                ? foods.map((food, index) => (
                    <div>
                        <p key={index}>{food.nome} {food.unidadeMedida}</p>
                        <button onClick={() => removeFood(food.id)}>
                            Remover
                        </button>
                    </div>
                )
                
                )
                : <p>Lista de alimentos vazia</p>
            }
            <Link to="/login">Login</Link> <br />
            <Link to="/register">Register</Link>
        </>
    );
}
