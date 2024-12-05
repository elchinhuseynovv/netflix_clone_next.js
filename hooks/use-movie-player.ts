"use client";

import { create } from "zustand";
import { Movie } from "@/lib/types";

interface MoviePlayerStore {
  isPlaying: boolean;
  movie: Movie | null;
  startMovie: (movie: Movie) => void;
  stopMovie: () => void;
}

export const useMoviePlayer = create<MoviePlayerStore>((set) => ({
  isPlaying: false,
  movie: null,
  startMovie: (movie) => set({ isPlaying: true, movie }),
  stopMovie: () => set({ isPlaying: false, movie: null }),
}));