"use client";

import { useEffect, useState } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { featuredMovies } from "@/lib/data";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredMovies.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % featuredMovies.length);
  };

  const currentMovie = featuredMovies[current];
  const movieTitle = t(`movies.${currentMovie.id}.title`) || currentMovie.title;
  const movieDescription = t(`movies.${currentMovie.id}.description`) || currentMovie.description;

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={currentMovie.thumbnail}
            alt={movieTitle}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-1/2 flex justify-between px-4 lg:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm"
          onClick={handleNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
      
      <div className="absolute bottom-0 w-full px-4 lg:px-8 pb-20">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">{movieTitle}</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            {movieDescription}
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="font-semibold">
              <Play className="mr-2 h-5 w-5" /> {t("common.play")}
            </Button>
            <Link href={`/movie/${currentMovie.id}`}>
              <Button size="lg" variant="outline" className="font-semibold">
                <Info className="mr-2 h-5 w-5" /> {t("common.moreInfo")}
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="flex justify-center gap-2 mt-8">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrent(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}