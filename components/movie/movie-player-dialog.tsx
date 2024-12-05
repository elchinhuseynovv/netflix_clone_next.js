"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Movie } from "@/lib/types";
import { useMoviePlayer } from "@/hooks/use-movie-player";

interface MoviePlayerDialogProps {
  movie: Movie;
}

export default function MoviePlayerDialog({ movie }: MoviePlayerDialogProps) {
  const { isPlaying, stopMovie } = useMoviePlayer();

  return (
    <Dialog open={isPlaying} onOpenChange={stopMovie}>
      <DialogContent className="sm:max-w-[80vw] h-[80vh] p-0">
        <div className="w-full h-full bg-black flex items-center justify-center">
          <p className="text-white text-xl">Now playing: {movie.title}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}