"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Movie } from "@/lib/types";
import { useMovieTrailer } from "@/hooks/use-movie-trailer";

interface MovieTrailerDialogProps {
  movie: Movie;
}

export default function MovieTrailerDialog({ movie }: MovieTrailerDialogProps) {
  const { isOpen, closeTrailer } = useMovieTrailer();

  return (
    <Dialog open={isOpen} onOpenChange={closeTrailer}>
      <DialogContent className="sm:max-w-[80vw] h-[80vh] p-0">
        <iframe
          className="w-full h-full"
          src={movie.trailerUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
}