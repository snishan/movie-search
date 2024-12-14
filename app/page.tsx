'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from '@/components/search-bar';
import { MovieGrid } from '@/components/movie-grid';
import { fetchTrending } from '@/lib/redux/actions/movieActions';
import { Film } from 'lucide-react';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-background relative  bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-illustration">
        <div className="movie-grid-pattern" />
      </div>
      
      <div className="container mx-auto py-8 space-y-8 relative">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Film className="w-8 h-8" />
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Movie Search
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Discover your next favorite movie
          </p>
        </div>
        
        <SearchBar />
        <MovieGrid />
      </div>
    </main>
  );
}