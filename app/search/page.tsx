"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getAllMovies } from "@/lib/data";
import MovieList from "@/components/movie-list";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const allContent = getAllMovies();
  
  const filteredContent = allContent.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background pt-24 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search titles, genres, or descriptions..."
            className="pl-10 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {searchQuery && (
          <MovieList
            title={`Search Results ${filteredContent.length ? `(${filteredContent.length})` : ''}`}
            movies={filteredContent}
          />
        )}
      </div>
    </main>
  );
}