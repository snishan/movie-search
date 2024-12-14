import Image from 'next/image';
import { getMoviePosterUrl } from '@/lib/utils/image';

interface MovieImageProps {
  posterPath: string;
  title: string;
  className?: string;
}

export function MovieImage({ posterPath, title, className }: MovieImageProps) {
  return (
    <div className={`relative aspect-[2/3] ${className}`}>
      <Image
        src={getMoviePosterUrl(posterPath)}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}