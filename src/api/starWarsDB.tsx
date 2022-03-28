import axios from 'axios';

const starWarsDB = axios.create({
    baseURL: 'https://swapi.dev/api',
})


export default starWarsDB;