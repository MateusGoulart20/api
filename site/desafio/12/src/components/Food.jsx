import { Button, Card, Row } from "react-bootstrap";

export function Food(props) {
    return (
        <Card className="mb-3 p-3 bg-light">
            <Card.Title><strong>Nome: </strong>{props.food.nome}</Card.Title>
            <Card.Text><strong>Unidade de medida: </strong>{props.food.unidadeMedida}</Card.Text>
            <Row xs="auto" className="d-flex justify-content-end">
                <Button variant="secondary">Editar</Button>
                <Button variant="outline-danger" className="ms-3">Apagar</Button>
            </Row>
        </Card>
    );
}
