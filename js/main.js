import { fetchMovies } from './api.js';
import { searchButton, onSubmit } from './movie-search.js';

fetchMovies();

searchButton();

onSubmit();