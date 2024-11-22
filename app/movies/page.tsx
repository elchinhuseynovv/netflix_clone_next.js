"use client";

import { getAllMovies } from "@/lib/data";
import MovieList from "@/components/movie-list";

export default function Movies() {
  const movies = getAllMovies().filter(movie => movie.type === "movie");
  const categories = [
    {
      id: "all-movies",
      title: "All Movies",
      movies: movies
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="space-y-8 pb-8">
        {categories.map((category) => (
          <MovieList
            key={category.id}
            title={category.title}
            movies={category.movies}
          />
        ))}
      </div>
    </main>
  );
}