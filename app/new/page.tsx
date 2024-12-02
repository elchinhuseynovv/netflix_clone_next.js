"use client";

import { getAllMovies } from "@/lib/data";
import MovieList from "@/components/movie-list";
import { useLanguage } from "@/lib/i18n/language-context";

export default function NewAndPopular() {
  const { t } = useLanguage();
  const allContent = getAllMovies();
  
  // Get content from the last 2 years
  const currentYear = new Date().getFullYear();
  const newReleases = allContent.filter(item => item.year >= currentYear - 1);
  
  // Get highly rated content (4.5+ stars)
  const popular = allContent.filter(item => item.stars >= 4.5);

  const categories = [
    {
      id: "new-releases",
      title: t("common.newReleases"),
      movies: newReleases
    },
    {
      id: "trending",
      title: t("common.trending"),
      movies: popular
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="space-y-12 pb-8">
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