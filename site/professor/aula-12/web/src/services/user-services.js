import { api } from './api';

export async function registerUser(data) {
    try {
        const result = await api.post('register', data);
        return {
            title: 'Sucesso',
            message: 'usuario cadastrado com sucesso!'
        }
    } catch (error) {
        console.error(error);
        return {
            title: 'houve um erro de cadastro',
            message: error.response.data.error
        }

    }
}
export async function loginUser(data) {
    try {
        const result = await api.post('login', data);
        return {
            title: 'Sucesso',
            message: 'usuario logado com sucesso!'
        }
    } catch (error) {   
        console.error(error);
        return {
            title: 'houve um erro de login',
            message: error.response.data.error
        }

    }
}
