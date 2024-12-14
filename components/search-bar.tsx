'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RootState } from '@/lib/redux/store';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const searchHistory = useSelector((state: RootState) => state.movies.searchHistory);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch({ type: 'SEARCH_MOVIES', payload: query.trim() });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </form>
      
      {searchHistory.length > 0 && (
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">Recent searches:</p>
          <div className="flex flex-wrap gap-2">
            {searchHistory.map((term, index) => (
              <Button
                key={index}
                variant="secondary"
                size="sm"
                onClick={() => {
                  setQuery(term);
                  dispatch({ type: 'SEARCH_MOVIES', payload: term });
                }}
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}