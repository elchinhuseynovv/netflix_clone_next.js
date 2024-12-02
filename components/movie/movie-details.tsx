"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Movie } from "@/lib/types";
import { Calendar, Clock, Film, Star, Award, User } from "lucide-react";
import MovieStats from "./movie-stats";
import MovieCastCrew from "./movie-cast-crew";
import MovieReviews from "./movie-reviews";
import { useLanguage } from "@/lib/i18n/language-context";

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const { t } = useLanguage();

  return (
    <div className="lg:col-span-2 space-y-8">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">{t("movie.synopsis")}</h2>
        <p className="text-lg text-gray-300">{movie.description}</p>
        <Separator className="my-6" />
        <MovieStats movie={movie} />
      </Card>

      <MovieCastCrew movie={movie} />
      <MovieReviews movieId={movie.id} />
    </div>
  );
}