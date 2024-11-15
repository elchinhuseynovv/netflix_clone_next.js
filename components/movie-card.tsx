"use client";

import { motion } from "framer-motion";
import { Play, Plus, Clock } from "lucide-react";
import { Movie } from "@/lib/types";
import { Button } from "./ui/button";
import { Rating } from "./ui/rating";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group rounded-lg overflow-hidden bg-black/20"
      >
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full aspect-[2/3] object-cover transition-transform group-hover:scale-105 group-hover:opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
            <h3 className="text-lg font-semibold line-clamp-1">{movie.title}</h3>
            
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Badge variant="secondary" className="capitalize">
                {movie.type}
              </Badge>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
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
                <Play className="w-4 h-4 mr-1" /> Play
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                className="transition-colors hover:bg-white/20"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}