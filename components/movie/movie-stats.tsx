"use client";

import { Movie } from "@/lib/types";
import { Calendar, Clock, Film, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

interface MovieStatsProps {
  movie: Movie;
}

export default function MovieStats({ movie }: MovieStatsProps) {
  const { t } = useLanguage();

  const movieType = t(`movie.movieType.${movie.type}`);
  const movieDuration = t(`movies.${movie.id}.duration`) || movie.duration;
  const movieReleaseDate = t(`movies.${movie.id}.releaseDate`) || movie.releaseDate;

  const stats = [
    { icon: Calendar, label: t("movie.releaseDate"), value: movieReleaseDate },
    { icon: Clock, label: t("movie.duration"), value: movieDuration },
    { icon: Film, label: t("movie.type"), value: movieType },
    { icon: Star, label: t("movie.rating"), value: `${movie.stars}/5` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="text-center">
          <Icon className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <div className="text-sm text-muted-foreground">{label}</div>
          <div className="font-medium mt-1">{value}</div>
        </div>
      ))}
    </div>
  );
}