import { Movie } from "./types";

export const featuredMovies: Movie[] = [
  {
    id: "1",
    title: "Kızılcık Şerbeti",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920",
    description: "A compelling Turkish drama that explores family dynamics and societal expectations through the story of two different families united by marriage.",
    genre: ["Drama", "Family"],
    rating: "TV-14",
    year: 2024,
    duration: "2 Seasons",
    type: "series",
    stars: 4.7,
    trailerUrl: "https://www.youtube.com/embed/example1",
    director: "Cem Karcı",
    cast: ["Evrim Alasya", "Sıla Türkoğlu", "Barış Kılıç"],
    releaseDate: "January 1, 2024",
    ratingDistribution: [
      { stars: 5, percentage: 65 },
      { stars: 4, percentage: 25 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],
  },
  {
    id: "2",
    title: "Bahar",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920",
    description: "A heartwarming series about new beginnings and personal growth, following the journey of a woman named Bahar as she navigates life's challenges.",
    genre: ["Drama", "Romance"],
    rating: "TV-14",
    year: 2024,
    duration: "1 Season",
    type: "series",
    stars: 4.8,
    trailerUrl: "https://www.youtube.com/embed/example2",
    director: "Ali Bilgin",
    cast: ["Demet Özdemir", "Halit Ergenç", "Serenay Sarıkaya"],
    releaseDate: "February 15, 2024",
    ratingDistribution: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],
  },
];

export const movieCategories = [
  {
    id: "trending",
    title: "Trending Now",
    movies: [
      {
        id: "3",
        title: "Kızıl Goncalar",
        thumbnail: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=1920",
        description: "A powerful drama series that weaves together love, betrayal, and redemption in contemporary Turkey.",
        genre: ["Drama", "Romance", "Mystery"],
        rating: "TV-14",
        year: 2024,
        duration: "1 Season",
        type: "series",
        stars: 4.6,
        trailerUrl: "https://www.youtube.com/embed/example3",
        director: "Çağrı Vila Lostuvalı",
        cast: ["Özge Gürel", "Burak Deniz", "Aslı Enver"],
        releaseDate: "March 1, 2024",
        ratingDistribution: [
          { stars: 5, percentage: 60 },
          { stars: 4, percentage: 30 },
          { stars: 3, percentage: 7 },
          { stars: 2, percentage: 2 },
          { stars: 1, percentage: 1 },
        ],
      },
      {
        id: "4",
        title: "Gönül Dağı",
        thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920",
        description: "A touching series that explores life in rural Turkey, focusing on traditions, family bonds, and community spirit.",
        genre: ["Drama", "Family"],
        rating: "TV-PG",
        year: 2024,
        duration: "3 Seasons",
        type: "series",
        stars: 4.9,
        trailerUrl: "https://www.youtube.com/embed/example4",
        director: "Yahya Samancı",
        cast: ["Berk Atan", "Gülsim Ali", "Ecem Özkaya"],
        releaseDate: "January 20, 2024",
        ratingDistribution: [
          { stars: 5, percentage: 80 },
          { stars: 4, percentage: 15 },
          { stars: 3, percentage: 3 },
          { stars: 2, percentage: 1 },
          { stars: 1, percentage: 1 },
        ],
      },
    ],
  },
  {
    id: "new-releases",
    title: "New Releases",
    movies: [
      {
        id: "5",
        title: "Teşkilat",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1920",
        description: "An intense action-drama series following Turkey's National Intelligence Organization as they protect national security.",
        genre: ["Action", "Drama", "Thriller"],
        rating: "TV-14",
        year: 2024,
        duration: "4 Seasons",
        type: "series",
        stars: 4.8,
        trailerUrl: "https://www.youtube.com/embed/example5",
        director: "Yağız Alp Akaydın",
        cast: ["Çağlar Ertuğrul", "Deniz Baysal", "Mesut Akusta"],
        releaseDate: "February 1, 2024",
        ratingDistribution: [
          { stars: 5, percentage: 75 },
          { stars: 4, percentage: 15 },
          { stars: 3, percentage: 7 },
          { stars: 2, percentage: 2 },
          { stars: 1, percentage: 1 },
        ],
      }
    ],
  },
];

export function findMovieById(id: string): Movie | undefined {
  const allMovies = [
    ...featuredMovies,
    ...movieCategories.flatMap(category => category.movies)
  ];
  return allMovies.find(movie => movie.id === id);
}

export function getAllMovies(): Movie[] {
  return [
    ...featuredMovies,
    ...movieCategories.flatMap(category => category.movies)
  ];
}

export function findMovieReviews(id: string) {
  return {
    acting: {
      averageRating: 4.8,
      reviews: [
        {
          author: "Mehmet Y.",
          rating: 5,
          content: "The performances are outstanding, especially in emotional scenes.",
          date: "March 15, 2024"
        }
      ]
    },
    visuals: {
      averageRating: 4.7,
      reviews: [
        {
          author: "Ayşe K.",
          rating: 5,
          content: "Beautiful cinematography that captures Turkey's stunning landscapes.",
          date: "March 14, 2024"
        }
      ]
    },
    story: {
      averageRating: 4.9,
      reviews: [
        {
          author: "Can B.",
          rating: 5,
          content: "A masterpiece of storytelling that keeps you engaged.",
          date: "March 16, 2024"
        }
      ]
    },
    soundtrack: {
      averageRating: 4.6,
      reviews: [
        {
          author: "Zeynep A.",
          rating: 5,
          content: "The musical score perfectly complements the emotional moments.",
          date: "March 20, 2024"
        }
      ]
    },
    direction: {
      averageRating: 4.8,
      reviews: [
        {
          author: "Ali R.",
          rating: 5,
          content: "Excellent direction that brings out the best in the cast.",
          date: "March 19, 2024"
        }
      ]
    }
  };
}