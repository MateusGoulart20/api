import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1>Formulário</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'E-mail obrigatório'
                            },
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Email inválido.',
                            }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Senha obrigatória.'
                            },
                            minLength: {
                                value: 6,
                                message: 'A senha deve ter no mínimo 6 caracteres.'
                            }
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
