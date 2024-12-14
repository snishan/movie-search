import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RatingBadgeProps {
  rating: number;
}

export function RatingBadge({ rating }: RatingBadgeProps) {
  return (
    <Badge variant="secondary" className="flex items-center gap-1">
      <Star className="w-3 h-3" />
      {rating.toFixed(1)}
    </Badge>
  );
}