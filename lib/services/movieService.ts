import axios from 'axios';
import { API_CONFIG } from '../config/api';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },
});

export const movieService = {
  search: async (query: string) => {
    const response = await api.get(API_CONFIG.ENDPOINTS.SEARCH, {
      params: {
        query,
        ...API_CONFIG.DEFAULT_PARAMS,
      },
    });
    return response.data;
  },

  getTrending: async () => {
    const response = await api.get(API_CONFIG.ENDPOINTS.TRENDING);
    return response.data;
  },

  getDetails: async (id: number) => {
    const response = await api.get(`${API_CONFIG.ENDPOINTS.MOVIE}/${id}`);
    return response.data;
  },

  getGenres: async () => {
    const response = await api.get(API_CONFIG.ENDPOINTS.GENRES);
    return response.data;
  },
};