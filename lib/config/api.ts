export const API_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  ENDPOINTS: {
    SEARCH: '/search/movie',
    TRENDING: '/trending/movie/week',
    MOVIE: '/movie',
    GENRES: '/genre/movie/list',
  },
  DEFAULT_PARAMS: {
    include_adult: false,
  },
};