"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Movie } from "@/lib/types";

interface MovieSidebarProps {
  movie: Movie;
}

export default function MovieSidebar({ movie }: MovieSidebarProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Rating Distribution</h3>
        {movie.ratingDistribution.map((rating) => (
          <div key={rating.stars} className="flex items-center gap-3 mb-3">
            <span className="w-12 text-sm">{rating.stars} stars</span>
            <Progress value={rating.percentage} className="flex-1" />
            <span className="text-sm w-12">{rating.percentage}%</span>
          </div>
        ))}
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Additional Info</h3>
        <dl className="space-y-3">
          <div>
            <dt className="text-sm text-gray-400">Director</dt>
            <dd className="mt-1">{movie.director}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-400">Cast</dt>
            <dd className="mt-1">{movie.cast.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-400">Release Date</dt>
            <dd className="mt-1">{movie.releaseDate}</dd>
          </div>
        </dl>
      </Card>
    </div>
  );
}