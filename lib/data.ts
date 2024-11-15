import { Movie, ReviewCategory, CategoryReviews } from "./types";

// ... (previous featuredMovies and movieCategories data remains the same)

const movieDetails: Record<string, Partial<Movie>> = {
  "1": {
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    releaseDate: "July 16, 2010",
    ratingDistribution: [
      { stars: 5, percentage: 65 },
      { stars: 4, percentage: 25 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],
  },
  // Add more movie details as needed
};

const movieReviews: Record<string, Record<ReviewCategory, CategoryReviews>> = {
  "1": {
    acting: {
      averageRating: 4.8,
      reviews: [
        {
          author: "Roger Ebert",
          rating: 5,
          content: "DiCaprio delivers a masterful performance, bringing depth and complexity to Cobb's character. The entire ensemble cast works together seamlessly.",
          date: "July 15, 2010"
        },
        {
          author: "Peter Travers",
          rating: 5,
          content: "The cast's ability to ground this mind-bending narrative in emotional reality is remarkable. Each performance adds layers to the intricate plot.",
          date: "July 14, 2010"
        }
      ]
    },
    visuals: {
      averageRating: 5.0,
      reviews: [
        {
          author: "A.O. Scott",
          rating: 5,
          content: "The visual effects are groundbreaking, creating a seamless blend of practical and digital elements that serve the story rather than overshadow it.",
          date: "July 16, 2010"
        }
      ]
    },
    story: {
      averageRating: 4.7,
      reviews: [
        {
          author: "David Denby",
          rating: 5,
          content: "A masterfully crafted narrative that challenges and rewards its audience. The layered storytelling creates a rich and immersive experience.",
          date: "July 19, 2010"
        }
      ]
    },
    soundtrack: {
      averageRating: 4.9,
      reviews: [
        {
          author: "Mark Kermode",
          rating: 5,
          content: "Hans Zimmer's score is a character unto itself, driving the tension and emotion of each scene with precision and power.",
          date: "July 20, 2010"
        }
      ]
    },
    direction: {
      averageRating: 4.9,
      reviews: [
        {
          author: "Todd McCarthy",
          rating: 5,
          content: "Nolan's direction is meticulous, balancing complex concepts with emotional resonance. Every frame serves the story's purpose.",
          date: "July 13, 2010"
        }
      ]
    }
  }
};

export function findMovieById(id: string): Movie | undefined {
  const baseMovie = [...featuredMovies, ...movieCategories.flatMap(c => c.movies)]
    .find(m => m.id === id);
  
  if (!baseMovie) return undefined;
  
  return {
    ...baseMovie,
    ...movieDetails[id]
  } as Movie;
}

export function findMovieReviews(id: string) {
  return movieReviews[id] || {};
}