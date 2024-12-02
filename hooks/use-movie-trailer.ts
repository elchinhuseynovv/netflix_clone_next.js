"use client";

import { create } from "zustand";
import { Movie } from "@/lib/types";

interface MovieTrailerStore {
  isOpen: boolean;
  movie: Movie | null;
  openTrailer: (movie: Movie) => void;
  closeTrailer: () => void;
}

export const useMovieTrailer = create<MovieTrailerStore>((set) => ({
  isOpen: false,
  movie: null,
  openTrailer: (movie) => set({ isOpen: true, movie }),
  closeTrailer: () => set({ isOpen: false, movie: null }),
}));