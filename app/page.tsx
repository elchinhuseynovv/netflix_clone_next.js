"use client";

import Hero from "@/components/hero";
import MovieList from "@/components/movie-list";
import { movieCategories } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Home() {
  const { t } = useLanguage();

  const translatedCategories = movieCategories.map(category => ({
    ...category,
    title: t(`common.${category.id}`)
  }));

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="space-y-8 pb-8">
        {translatedCategories.map((category) => (
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