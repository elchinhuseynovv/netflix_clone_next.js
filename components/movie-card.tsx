"use client";

import { motion } from "framer-motion";
import { Play, Info, Plus } from "lucide-react";
import { Movie } from "@/lib/types";
import { Button } from "./ui/button";
import { Rating } from "./ui/rating";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { t } = useLanguage();

  const movieTitle = t(`movies.${movie.id}.title`) || movie.title;
  const movieDescription = t(`movies.${movie.id}.description`) || movie.description;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group rounded-lg overflow-hidden bg-black/20"
    >
      <img
        src={movie.thumbnail}
        alt={movieTitle}
        className="w-full aspect-[2/3] object-cover transition-transform group-hover:scale-105 group-hover:opacity-30"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
          <h3 className="text-lg font-semibold line-clamp-1">{movieTitle}</h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Badge variant="secondary" className="capitalize">
              {movie.type}
            </Badge>
            <div className="flex items-center gap-1">
              <span>{movie.duration}</span>
            </div>
          </div>

          <Rating rating={movie.stars} className="mb-2" />
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="default"
              className="transition-colors hover:bg-red-600"
            >
              <Play className="w-4 h-4 mr-1" /> {t("common.play")}
            </Button>
            <Link href={`/movie/${movie.id}`} className="flex-1">
              <Button 
                size="sm" 
                variant="outline"
                className="w-full transition-colors hover:bg-white/20"
              >
                <Info className="w-4 h-4 mr-1" /> {t("common.moreInfo")}
              </Button>
            </Link>
            <Button 
              size="sm" 
              variant="outline"
              className="transition-colors hover:bg-white/20"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-sm text-gray-300 line-clamp-2">
            {movieDescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
}