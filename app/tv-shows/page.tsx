"use client";

import { useEffect } from "react";
import { getAllMovies } from "@/lib/data";
import MovieList from "@/components/movie-list";

export default function TVShows() {
  const tvShows = getAllMovies().filter(movie => movie.type === "series");
  const categories = [
    {
      id: "all-shows",
      title: "All TV Shows",
      movies: tvShows
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