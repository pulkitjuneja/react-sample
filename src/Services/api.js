import axios from 'axios';

export const getMovie = () => axios.get('http://localhost:9999/movies/random');

