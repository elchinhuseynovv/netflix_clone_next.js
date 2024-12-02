"use client";

import { Card } from "@/components/ui/card";
import { getAllMovies } from "@/lib/data";
import MovieCard from "@/components/movie-card";

export default function AccountMyList() {
  // Simulate saved items - in a real app, this would come from user data
  const allMovies = getAllMovies();
  const savedItems = allMovies.slice(0, 4); // Just showing first 4 items as example

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">My List</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {savedItems.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Card>
    </div>
  );
}