import { Movie } from "./types";

export const featuredMovies: Movie[] = [
  {
    id: "1",
    title: "Kuruluş Osman",
    thumbnail: "https://images.unsplash.com/photo-1590845947676-fa2576f0a33c?w=800&auto=format&fit=crop",
    description: "Osmanlı İmparatorluğu'nun kuruluş dönemini ve Osman Bey'in mücadelelerini anlatan tarihi dizi.",
    genre: ["History", "Action", "Drama"],
    rating: "TV-14",
    year: 2019,
    duration: "120m",
    type: "series",
    stars: 4.9,
    trailerUrl: "https://www.youtube.com/embed/example1",
    director: "Metin Günay",
    cast: ["Burak Özçivit", "Özge Törer", "Yiğit Uçan"],
    releaseDate: "November 20, 2019",
    ratingDistribution: [
      { stars: 5, percentage: 85 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 }
    ]
  },
  {
    id: "2",
    title: "Hercai",
    thumbnail: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&auto=format&fit=crop",
    description: "Kapadokya'nın mistik atmosferinde geçen, intikam ve aşk arasında sıkışmış iki gencin hikayesi.",
    genre: ["Drama", "Romance"],
    rating: "TV-14",
    year: 2019,
    duration: "120m",
    type: "series",
    stars: 4.8,
    trailerUrl: "https://www.youtube.com/embed/example2",
    director: "Cem Karcı",
    cast: ["Akın Akınözü", "Ebru Şahin", "Ayda Aksel"],
    releaseDate: "March 15, 2019",
    ratingDistribution: [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 }
    ]
  },
  {
    id: "3",
    title: "Mucize Doktor",
    thumbnail: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop",
    description: "Otizm spektrum bozukluğu ve savant sendromu olan genç bir cerrahın hastane yaşamı.",
    genre: ["Drama", "Medical"],
    rating: "TV-14",
    year: 2019,
    duration: "120m",
    type: "series",
    stars: 4.9,
    trailerUrl: "https://www.youtube.com/embed/example3",
    director: "Yusuf Pirhasan",
    cast: ["Taner Ölmez", "Sinem Ünsal", "Onur Tuna"],
    releaseDate: "September 12, 2019",
    ratingDistribution: [
      { stars: 5, percentage: 85 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 }
    ]
  }
];

export const movieCategories = [
  {
    id: "trending",
    title: "Trending Now",
    movies: [
      {
        id: "4",
        title: "Kıyamet Deneyi: Aporia",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
        description: "Bilim kurgu ve gerilimin iç içe geçtiği, bir grup bilim insanının tehlikeli deneyinin sonuçları.",
        genre: ["Sci-Fi", "Thriller"],
        rating: "TV-MA",
        year: 2019,
        duration: "97m",
        type: "movie",
        stars: 4.5,
        trailerUrl: "https://www.youtube.com/embed/example4",
        director: "Emre Akay",
        cast: ["Funda Eryiğit", "Özgür Emre Yıldırım", "Sarp Aydınoğlu"],
        releaseDate: "October 25, 2019",
        ratingDistribution: [
          { stars: 5, percentage: 65 },
          { stars: 4, percentage: 25 },
          { stars: 3, percentage: 7 },
          { stars: 2, percentage: 2 },
          { stars: 1, percentage: 1 }
        ]
      },
      {
        id: "5",
        title: "Zehir Zemberek",
        thumbnail: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&auto=format&fit=crop",
        description: "İstanbul'un arka sokaklarında geçen, aksiyon dolu bir polisiye macera.",
        genre: ["Action", "Crime"],
        rating: "TV-MA",
        year: 2021,
        duration: "110m",
        type: "movie",
        stars: 4.6,
        trailerUrl: "https://www.youtube.com/embed/example5",
        director: "Murat Aslan",
        cast: ["Halil Babür", "Burcu Biricik", "Erkan Petekkaya"],
        releaseDate: "July 15, 2021",
        ratingDistribution: [
          { stars: 5, percentage: 70 },
          { stars: 4, percentage: 20 },
          { stars: 3, percentage: 7 },
          { stars: 2, percentage: 2 },
          { stars: 1, percentage: 1 }
        ]
      }
    ]
  },
  {
    id: "newReleases",
    title: "New Releases",
    movies: [
      {
        id: "6",
        title: "Kızılcık Şerbeti",
        thumbnail: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&auto=format&fit=crop",
        description: "Farklı sosyal sınıflardan iki ailenin kesişen hayatları ve yaşadıkları çatışmalar.",
        genre: ["Drama", "Family"],
        rating: "TV-14",
        year: 2022,
        duration: "120m",
        type: "series",
        stars: 4.7,
        trailerUrl: "https://www.youtube.com/embed/example6",
        director: "Yusuf Pirhasan",
        cast: ["Barış Kılıç", "Evrim Alasya", "Sıla Türkoğlu"],
        releaseDate: "September 17, 2022",
        ratingDistribution: [
          { stars: 5, percentage: 75 },
          { stars: 4, percentage: 20 },
          { stars: 3, percentage: 3 },
          { stars: 2, percentage: 1 },
          { stars: 1, percentage: 1 }
        ]
      }
    ]
  },
  {
    id: "tvShows",
    title: "TV Shows",
    movies: [
      {
        id: "7",
        title: "Gönül Dağı",
        thumbnail: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop",
        description: "Anadolu'nun küçük bir kasabasında geçen, geleneksel değerleri ve insan ilişkilerini anlatan dizi.",
        genre: ["Drama", "Romance"],
        rating: "TV-PG",
        year: 2020,
        duration: "120m",
        type: "series",
        stars: 4.8,
        trailerUrl: "https://www.youtube.com/embed/example7",
        director: "Yahya Samancı",
        cast: ["Berk Atan", "Gülsim Ali İlhan", "Ecem Özkaya"],
        releaseDate: "October 17, 2020",
        ratingDistribution: [
          { stars: 5, percentage: 80 },
          { stars: 4, percentage: 15 },
          { stars: 3, percentage: 3 },
          { stars: 2, percentage: 1 },
          { stars: 1, percentage: 1 }
        ]
      },
      {
        id: "8",
        title: "Teşkilat",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
        description: "Türk İstihbarat Teşkilatı'nın zorlu görevlerini ve fedakâr ajanlarının hikayelerini anlatan dizi.",
        genre: ["Action", "Drama", "Thriller"],
        rating: "TV-14",
        year: 2021,
        duration: "130m",
        type: "series",
        stars: 4.7,
        trailerUrl: "https://www.youtube.com/embed/example8",
        director: "Yağız Alp Akaydın",
        cast: ["Çağlar Ertuğrul", "Deniz Baysal", "Mesut Akusta"],
        releaseDate: "March 7, 2021",
        ratingDistribution: [
          { stars: 5, percentage: 75 },
          { stars: 4, percentage: 20 },
          { stars: 3, percentage: 3 },
          { stars: 2, percentage: 1 },
          { stars: 1, percentage: 1 }
        ]
      }
    ]
  }
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
          content: "Oyuncuların performansları muhteşem, özellikle duygusal sahnelerde çok etkileyici.",
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
          content: "Görsel efektler ve sinematografi Türkiye'nin güzel manzaralarını mükemmel yansıtıyor.",
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
          content: "Hikaye anlatımı çok başarılı, Türk kültürünü güzel bir şekilde yansıtıyor.",
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
          content: "Müzikler duygusal sahnelerle mükemmel uyum sağlıyor, geleneksel Türk müziği unsurları harika.",
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
          content: "Yönetmen, oyuncuların performanslarını çok iyi yönetmiş ve kültürel özellikleri başarıyla yansıtmış.",
          date: "March 19, 2024"
        }
      ]
    }
  };
}