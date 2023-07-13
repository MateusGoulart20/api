import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function App() {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='col-md mx-auto'>
            <Container fluid className='p-5'>
                <Form noValidate validated={!!errors} onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Form.Group as={Col} sm className='mb-3'>
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                required
                                placeholder="Insira seu nome completo"
                                {...register('name', {
                                    required: 'Nome Completo é obrigatório'
                                })}
                            />
                            {errors.name && <Form.Control.Feedback type="invalid">{errors.fullName.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group as={Col} sm className='mb-3'>
                            <Form.Label>CEP</Form.Label>
                            <Form.Control
                                type="text"
                                name="cep"
                                id="cep"
                                isInvalid={errors.cep}
                                placeholder="Insira seu CEP"
                                {...register('cep', {
                                    pattern: {
                                        value: /\d{5}-\d{3}/,
                                        message: 'CEP inválido'
                                    },
                                })}
                            />
                            {errors.cep && <Form.Control.Feedback type="invalid">{errors.cep.message}</Form.Control.Feedback>}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} sm className='mb-3'>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                id="email"
                                required
                                isInvalid={errors.email}
                                placeholder="Insira seu e-mail"
                                {...register('email', {
                                    required: 'E-mail é obrigatório',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'E-mail inválido'
                                    }
                                })}
                            />
                            {errors.email && <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group as={Col} sm className='mb-3'>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type='password'
                                name="password"
                                id="password"
                                required
                                isInvalid={errors.password}
                                placeholder="Insira sua senha"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Senha é obrigatória'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'A senha deve ter no mínimo 5 caracteres'
                                    }
                                })}
                            />
                            {errors.password && <Form.Control.Feedback type="invalid">{errors.password.message}</Form.Control.Feedback>}
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} className="mb-5">
                        <Form.Check type="checkbox" label="Condordo com os termos de serviço." />
                    </Form.Group>
                    <Button type="submit">Enviar</Button>
                </Form>
            </Container>
        </div>
    );
}
