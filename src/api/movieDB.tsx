import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '674a6ef5377de277c8d3a10076bca897',
        language: 'es-ES'
    }
});

export default movieDB;