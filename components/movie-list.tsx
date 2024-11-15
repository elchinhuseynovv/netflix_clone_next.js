"use client";

import { motion } from "framer-motion";
import { Movie } from "@/lib/types";
import MovieCard from "./movie-card";

interface MovieListProps {
  title: string;
  movies: Movie[];
}

export default function MovieList({ title, movies }: MovieListProps) {
  return (
    <div className="px-4 lg:px-8 space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </motion.div>
    </div>
  );
}