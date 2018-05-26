import axios from 'axios';

export const getRandomMovie = () => axios.get('http://localhost:9999/movies/random');
export const getFirstMovie = () => axios.get('http://localhost:9999/movies/first');

