"use client";

import { Movie } from "@/lib/types";
import { Calendar, Clock, Film, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

interface MovieStatsProps {
  movie: Movie;
}

export default function MovieStats({ movie }: MovieStatsProps) {
  const { t } = useLanguage();

  const stats = [
    { icon: Calendar, label: t("movie.releaseDate"), value: movie.releaseDate },
    { icon: Clock, label: t("movie.duration"), value: movie.duration },
    { icon: Film, label: t("movie.type"), value: movie.type },
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