import { Container, Col } from "react-bootstrap";

import { Food } from "../components/Food";
import { Header } from "../components/Header";

export function Foods() {
    const foods = [
        {
            nome: 'Arroz',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Maça',
            unidadeMedida: 'Grama'
        },
        {
            nome: 'Leite',
            unidadeMedida: 'Mililitro'
        },
        {
            nome: 'Feijão',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Farinha de Trigo',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Tomate',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Banana',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Melância',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Mandioca',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Ovos',
            unidadeMedida: 'Grama'
        },
        {
            nome: 'Coca Cola',
            unidadeMedida: 'Litro'
        },
        {
            nome: 'Óleo',
            unidadeMedida: 'Litro'
        },
        {
            nome: 'Carne Moída',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Vinagre',
            unidadeMedida: 'Mililitro'
        },
        {
            nome: 'Costela',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Peito de Frango',
            unidadeMedida: 'Kilograma'
        },
        {
            nome: 'Suco',
            unidadeMedida: 'Mililitro'
        },
    ];

    return (
        <Container fluid>
            <Header title="Alimentos" />
            <Col className="w-50 m-auto">
                {foods.map((food, index) => (
                    <Food key={index} food={food} />
                ))}
            </Col>
        </Container>
    );
}
