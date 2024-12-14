export const MOVIE_ACTIONS = {
  SEARCH_MOVIES: 'SEARCH_MOVIES',
  FETCH_TRENDING: 'FETCH_TRENDING',
  GET_MOVIE_DATA: 'GET_MOVIE_DATA',
} as const;

export const searchMovies = (query: string) => ({
  type: MOVIE_ACTIONS.SEARCH_MOVIES,
  payload: query,
});

export const fetchTrending = () => ({
  type: MOVIE_ACTIONS.FETCH_TRENDING,
});

export const fetchMovieData = (id:number) => ({
  type: MOVIE_ACTIONS.GET_MOVIE_DATA,
  payload: {id},
});