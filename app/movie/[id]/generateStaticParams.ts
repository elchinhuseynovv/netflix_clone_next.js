import { getAllMovies } from "@/lib/data";

export async function generateStaticParams() {
  const movies = getAllMovies();
  return movies.map((movie) => ({
    id: movie.id,
  }));
}