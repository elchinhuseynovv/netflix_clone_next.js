import Hero from "@/components/hero";
import MovieList from "@/components/movie-list";
import { movieCategories } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="space-y-8 pb-8">
        {movieCategories.map((category) => (
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