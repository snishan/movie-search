'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { MovieCard } from './movie-card';
import { Loader2 } from 'lucide-react';

export function MovieGrid() {
  const { searchResults, trending, loading } = useSelector(
    (state: RootState) => state.movies
  );

  const movies = searchResults.length > 0 ? searchResults : trending;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}