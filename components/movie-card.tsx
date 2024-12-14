'use client';

import { Movie } from '@/lib/types/movie';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MovieImage } from '@/components/ui/movie-image';
import { RatingBadge } from '@/components/ui/rating-badge';
import { formatYear } from '@/lib/utils/date';
import { useRouter } from 'next/navigation';


interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const router = useRouter();

  const handleClickMovie=(idVal:number)=>{
    router.push(`/movie-details?id=${idVal}`)
  }
  
  return (
    <Card onClick={()=>handleClickMovie(movie.id)} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm">
      <MovieImage posterPath={movie.poster_path} title={movie.title} />
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold line-clamp-2">{movie.title}</h3>
          <RatingBadge rating={movie.vote_average} />
        </div>
        <p className="text-sm text-muted-foreground">
          {formatYear(movie.release_date)}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {movie.overview}
        </p>
      </CardContent>
    </Card>
  );
}