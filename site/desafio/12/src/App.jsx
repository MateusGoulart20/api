import { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
    const [foods, setFoods] = useState(null);

    

    useEffect(() => {
        getFoods();
    }, []);
/*
    async function getFoods() {
        try {
            const result = await fetch(
                `${API_URL}/foods`,
                { method: 'GET' }
            );
            const data = await result.json();
            setFoods(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function removeFood(id) {
        try {
            const result = await fetch(
                `${API_URL}/food/${id}`,
                { method: 'DELETE' }
            );
            const data = await result.json();
            if (result.status === 200) {
                alert(data.message);
            } else {
                alert(data.error);
            }
            await getFoods();
        } catch (error) {
            console.error(error);
        }
    }*/

    return (
        <div>
            <h1>Alimentos</h1>
            {foods
                ? foods.map((food, index) => (
                    <div className='cardFood' key={index}>
                        <p>{food.nome} ({food.unidadeMedida})</p>
                        <button
                            onClick={() => removeFood(food.id)}
                        >
                            Remover
                        </button>
                    </div>
                ))
                : <p className='listEmpty'>Lista de alimentos vazia</p>
            }
        </div>
    );
}
