import axios from 'axios';

//como esta en la raiz del proyecto este archivo, no hace falta colocar toda la ruta de url
const entriesApi = axios.create({
    baseURL: '/api',

});

export default entriesApi;