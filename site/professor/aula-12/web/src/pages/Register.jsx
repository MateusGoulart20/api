import { Button, Col, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Header } from '../components/Header';
import { Link } from "react-router-dom";
import { registerUser } from "../services/user-services";
import { Modal } from "../components/Modal";
import { useState } from "react";

export function Register() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [ result, setResult ] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const user = await registerUser(data);
        setResult(user);
        navigate("/foods");
    }

    return (
        <Container>
            <Modal
            show={result}
            title={result?.title}
            message={result?.message}
            handleClose={()=> setResult(null)}
            />

            <Header title="Crie sua conta" />
            <Form
                noValidate
                validated={!!errors}
                onSubmit={handleSubmit(onSubmit)}
                className="bg-light rounded p-5 shadow w-50 m-auto"
            >
                <Col>
                    <Input
                        className="mb-4"
                        label="E-mail"
                        type="text"
                        placeholder="Insira seu e-mail"
                        error={errors.email}
                        required={true}
                        name="email"
                        validations={register('email', {
                            required: {
                                value: true,
                                message: 'E-mail é obrigatório'
                            },
                            pattern: {
                                value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
                                message: 'E-mail inválido!'
                            }
                        })}
                    />
                    <Input
                        className="mb-4"
                        label="Senha"
                        type="password"
                        placeholder="Insira sua senha"
                        error={errors.password}
                        required={true}
                        name="password"
                        validations={register('password', {
                            required: {
                                value: true,
                                message: 'Senha é obrigatório'
                            }
                        })}
                    />
                    <div className="d-flex justify-content-between">
                        <Button type="submit">Criar</Button>
                        <Link to="/" className="">Já tenho uma conta</Link>
                    </div>
                </Col>
            </Form>
        </Container>
    );
}
