"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Movie } from "@/lib/types";
import { useMovieTrailer } from "@/hooks/use-movie-trailer";
import { useMoviePlayer } from "@/hooks/use-movie-player";
import { useLanguage } from "@/lib/i18n/language-context";

interface MovieHeroProps {
  movie: Movie;
}

export default function MovieHero({ movie }: MovieHeroProps) {
  const { openTrailer } = useMovieTrailer();
  const { startMovie } = useMoviePlayer();
  const { t } = useLanguage();

  const movieTitle = t(`movies.${movie.id}.title`) || movie.title;
  const movieDescription = t(`movies.${movie.id}.description`) || movie.description;

  return (
    <div className="relative h-[70vh]">
      <img
        src={movie.thumbnail}
        alt={movieTitle}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">{movieTitle}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Badge variant="secondary">{movie.rating}</Badge>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{movie.stars}/5</span>
            </div>
          </div>
          <div className="flex gap-3">
            {movie.genre.map((g) => (
              <Badge key={g} variant="outline">
                {g}
              </Badge>
            ))}
          </div>
          <p className="text-lg text-gray-200 max-w-2xl">
            {movieDescription}
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={() => startMovie(movie)}
              className="bg-red-600 hover:bg-red-700"
            >
              <Play className="mr-2 h-5 w-5" /> {t("common.play")}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => openTrailer(movie)}
            >
              <Play className="mr-2 h-5 w-5" /> {t("common.watchTrailer")}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}