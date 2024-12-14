import { Movie, MovieDetails } from '@/lib/types/movie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface MovieState {
  searchResults: Movie[];
  trending: Movie[];
  selectedMovie: MovieDetails | null;
  loading: boolean;
  error: string | null;
  searchHistory: string[];
}

const initialState: MovieState = {
  searchResults: [],
  trending: [],
  selectedMovie: null,
  loading: false,
  error: null,
  searchHistory: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<Movie[]>) => {
      state.searchResults = action.payload;
    },
    setTrending: (state, action: PayloadAction<Movie[]>) => {
      state.trending = action.payload;
    },
    setSelectedMovie: (state, action: PayloadAction<MovieDetails>) => {
      state.selectedMovie = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addToSearchHistory: (state, action: PayloadAction<string>) => {
      if (!state.searchHistory.includes(action.payload)) {
        state.searchHistory = [action.payload, ...state.searchHistory].slice(0, 10);
      }
    },
  },
});

export const {
  setSearchResults,
  setTrending,
  setSelectedMovie,
  setLoading,
  setError,
  addToSearchHistory,
} = movieSlice.actions;

export default movieSlice.reducer;