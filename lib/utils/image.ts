export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getMoviePosterUrl = (posterPath: string | null): string => {
  return posterPath ? `${TMDB_IMAGE_BASE_URL}${posterPath}` : '/placeholder.jpg';
};