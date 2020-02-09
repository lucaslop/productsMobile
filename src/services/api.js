import axios from 'axios';

const api = axios.create({
    baseURL: 'https://products-api-lucaslop.herokuapp.com/'
})

export default api;