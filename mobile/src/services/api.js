import axios from 'axios';

const api = axios.create({
    baseURL: '192.168.31.197:3333'
});

export default api;