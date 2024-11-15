"use client";

import { useEffect, useState } from "react";
import { Play, Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { findMovieById } from "@/lib/data";
import { ReviewCategory } from "@/lib/types";
import ReviewSection from "@/components/review-section";
import { motion } from "framer-motion";

export default function MoviePage({ params }: { params: { id: string } }) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const movie = findMovieById(params.id);

  if (!movie) return <div>Movie not found</div>;

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">{movie.title}</h1>
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
            <Button 
              size="lg" 
              onClick={() => setIsTrailerOpen(true)}
              className="bg-red-600 hover:bg-red-700"
            >
              <Play className="mr-2 h-5 w-5" /> Watch Trailer
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
            <p className="text-lg text-gray-300">{movie.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Critic Reviews</h2>
            <ReviewSection movieId={movie.id} />
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Rating Distribution</h3>
            {movie.ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-3 mb-3">
                <span className="w-12 text-sm">{rating.stars} stars</span>
                <Progress value={rating.percentage} className="flex-1" />
                <span className="text-sm w-12">{rating.percentage}%</span>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Additional Info</h3>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm text-gray-400">Director</dt>
                <dd className="mt-1">{movie.director}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-400">Cast</dt>
                <dd className="mt-1">{movie.cast.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-400">Release Date</dt>
                <dd className="mt-1">{movie.releaseDate}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Trailer Dialog */}
      <Dialog open={isTrailerOpen} onOpenChange={setIsTrailerOpen}>
        <DialogContent className="sm:max-w-[80vw] h-[80vh] p-0">
          <iframe
            className="w-full h-full"
            src={movie.trailerUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </main>
  );
}