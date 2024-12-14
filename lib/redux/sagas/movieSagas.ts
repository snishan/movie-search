import { call, put, takeLatest } from 'redux-saga/effects';
import { movieService } from '@/lib/services/movieService';
import { MOVIE_ACTIONS } from '../actions/movieActions';
import {
  setSearchResults,
  setTrending,
  setLoading,
  setError,
  addToSearchHistory,
  setSelectedMovie,
} from '../reducers/movieSlice';
import { SagaIterator } from 'redux-saga';

function* searchMoviesSaga(action: { type: string; payload: string }):SagaIterator {
  try {
    yield put(setLoading(true));
    const data = yield call(movieService.search, action.payload);
    yield put(setSearchResults(data.results));
    yield put(addToSearchHistory(action.payload));
  } catch (error) {
    yield put(setError('Failed to search movies'));
  } finally {
    yield put(setLoading(false));
  }
}

function* fetchTrendingMoviesSaga():SagaIterator {
  try {
    yield put(setLoading(true));
    const data = yield call(movieService.getTrending);
    yield put(setTrending(data.results));
  } catch (error) {
    yield put(setError('Failed to fetch trending movies'));
  } finally {
    yield put(setLoading(false));
  }
}

function* fetchMovieDataSaga(action: { type: string; payload: { id: number } }):SagaIterator {
  console.log("CALL",action);
  
  try {
    yield put(setLoading(true));
    const data = yield call(movieService.getDetails, action.payload.id); // Pass `id` explicitly
    console.log("data",data);
    
    yield put(setSelectedMovie(data));
  } catch (error) {
    yield put(setError('Failed to fetch trending movies'));
  } finally {
    yield put(setLoading(false));
  }
}

export function* movieSagas() {
  yield takeLatest(MOVIE_ACTIONS.SEARCH_MOVIES, searchMoviesSaga);
  yield takeLatest(MOVIE_ACTIONS.FETCH_TRENDING, fetchTrendingMoviesSaga);
  yield takeLatest(MOVIE_ACTIONS.GET_MOVIE_DATA, fetchMovieDataSaga);
}