export interface Movie {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  genre: string[];
  rating: string;
  year: number;
  duration: string;
  type: 'movie' | 'series';
  stars: number;
  trailerUrl: string;
  director: string;
  cast: string[];
  releaseDate: string;
  ratingDistribution: {
    stars: number;
    percentage: number;
  }[];
}

export type ReviewCategory = 'acting' | 'visuals' | 'story' | 'soundtrack' | 'direction';

export interface Review {
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface CategoryReviews {
  averageRating: number;
  reviews: Review[];
}