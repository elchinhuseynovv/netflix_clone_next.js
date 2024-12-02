import { findMovieById, getAllMovies } from "@/lib/data";
import MovieHero from "@/components/movie/movie-hero";
import MovieTrailerDialog from "@/components/movie/movie-trailer-dialog";
import MovieDetails from "@/components/movie/movie-details";
import MovieSidebar from "@/components/movie/movie-sidebar";

export async function generateStaticParams() {
  const movies = getAllMovies();
  return movies.map((movie) => ({
    id: movie.id,
  }));
}

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = findMovieById(params.id);

  if (!movie) return <div>Movie not found</div>;

  return (
    <main className="min-h-screen bg-background pt-16">
      <MovieHero movie={movie} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <MovieDetails movie={movie} />
          <MovieSidebar movie={movie} />
        </div>
      </div>

      <MovieTrailerDialog movie={movie} />
    </main>
  );
}