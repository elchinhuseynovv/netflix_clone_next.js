import { Movie } from "./types";

export const featuredMovies: Movie[] = [
  {
    id: "1",
    title: "Aşk ve Mavi",
    thumbnail: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/346855242_6920099168017849_2259489078777419682_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=beJGw1fNpjQQ7kNvgGJMAAt&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=A7MV6m3M0gEBPSzQqWja7_w&oh=00_AYAMJPPapB8_fUVG8WTl0DBa4bF2M2b6yaPITRHJV9u3Pg&oe=6753AFA8",
    description: "Bir aşk hikayesi etrafında gelişen, geleneksel değerler ve modern yaşamın çatışmasını anlatan dram.",
    genre: ["Drama", "Romance"],
    rating: "TV-14",
    year: 2024,
    duration: "120m",
    type: "series",
    stars: 4.8,
    trailerUrl: "https://www.youtube.com/embed/example1",
    director: "Mehmet Yılmaz",
    cast: ["Ayça Bingöl", "Kerem Bürsin", "Özge Gürel"],
    releaseDate: "March 15, 2024",
    ratingDistribution: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 }
    ]
  },
  {
    id: "2",
    title: "İstanbul Hatırası",
    thumbnail: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop",
    description: "İstanbul'un tarihi dokusunda geçen, üç kuşağın hikayesini anlatan etkileyici bir dram.",
    genre: ["Drama", "History"],
    rating: "TV-MA",
    year: 2024,
    duration: "2h 15m",
    type: "movie",
    stars: 4.9,
    trailerUrl: "https://www.youtube.com/embed/example2",
    director: "Çağan Irmak",
    cast: ["Haluk Bilginer", "Demet Evgar", "Çağatay Ulusoy"],
    releaseDate: "February 1, 2024",
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
    title: "Kara Sevda",
    thumbnail: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&auto=format&fit=crop",
    description: "İmkansız bir aşk hikayesi etrafında gelişen, sosyal sınıf farklılıklarını ele alan dram dizisi.",
    genre: ["Drama", "Romance"],
    rating: "TV-14",
    year: 2024,
    duration: "45m",
    type: "series",
    stars: 4.7,
    trailerUrl: "https://www.youtube.com/embed/example3",
    director: "Hilal Saral",
    cast: ["Burak Özçivit", "Neslihan Atagül", "Kaan Urgancıoğlu"],
    releaseDate: "January 15, 2024",
    ratingDistribution: [
      { stars: 5, percentage: 70 },
      { stars: 4, percentage: 25 },
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
        title: "Mucize Doktor",
        thumbnail: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop",
        description: "Otizmli genç bir doktorun hastane yaşamındaki zorluklarla mücadelesini anlatan dizi.",
        genre: ["Drama", "Medical"],
        rating: "TV-14",
        year: 2024,
        duration: "120m",
        type: "series",
        stars: 4.9,
        trailerUrl: "https://www.youtube.com/embed/example4",
        director: "Yusuf Pirhasan",
        cast: ["Taner Ölmez", "Sinem Ünsal", "Onur Tuna"],
        releaseDate: "March 1, 2024",
        ratingDistribution: [
          { stars: 5, percentage: 85 },
          { stars: 4, percentage: 10 },
          { stars: 3, percentage: 3 },
          { stars: 2, percentage: 1 },
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
        id: "5",
        title: "Benim Adım Melek",
        thumbnail: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&auto=format&fit=crop",
        description: "Geleneksel değerlerle modern yaşamın çatışmasını anlatan, güçlü bir kadın hikayesi.",
        genre: ["Drama", "Family"],
        rating: "TV-14",
        year: 2024,
        duration: "45m",
        type: "series",
        stars: 4.6,
        trailerUrl: "https://www.youtube.com/embed/example5",
        director: "Cem Karcı",
        cast: ["Nehir Erdoğan", "Kutsi", "Rabia Soytürk"],
        releaseDate: "March 10, 2024",
        ratingDistribution: [
          { stars: 5, percentage: 65 },
          { stars: 4, percentage: 25 },
          { stars: 3, percentage: 7 },
          { stars: 2, percentage: 2 },
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
        id: "6",
        title: "Çukur",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop",
        description: "İstanbul'un tehlikeli mahallelerinden birinde geçen, bir ailenin güç mücadelesini anlatan dizi.",
        genre: ["Action", "Crime", "Drama"],
        rating: "TV-MA",
        year: 2024,
        duration: "120m",
        type: "series",
        stars: 4.8,
        trailerUrl: "https://www.youtube.com/embed/example6",
        director: "Sinan Öztürk",
        cast: ["Aras Bulut İynemli", "Dilan Çiçek Deniz", "Erkan Kolçak Köstendil"],
        releaseDate: "February 15, 2024",
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