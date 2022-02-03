import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.102:3333'
});

const viacep = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default api;