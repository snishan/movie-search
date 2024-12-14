import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const searchMovies = async (query: string) => {
  const response = await api.get('/search/movie', {
    params: {
      query,
      include_adult: false,
    },
  });
  return response.data;
};

export const getTrendingMovies = async () => {
  const response = await api.get('/trending/movie/week');
  return response.data;
};

export const getMovieDetails = async (id: number) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const getGenres = async () => {
  const response = await api.get('/genre/movie/list');
  return response.data;
};