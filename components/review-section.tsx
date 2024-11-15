"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { findMovieReviews } from "@/lib/data";
import { ReviewCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ReviewSectionProps {
  movieId: string;
}

export default function ReviewSection({ movieId }: ReviewSectionProps) {
  const reviews = findMovieReviews(movieId);
  const [selectedCategory, setSelectedCategory] = useState<ReviewCategory>("acting");

  return (
    <Tabs defaultValue="acting" className="space-y-4">
      <TabsList className="grid grid-cols-5 w-full">
        <TabsTrigger value="acting">Acting</TabsTrigger>
        <TabsTrigger value="visuals">Visuals</TabsTrigger>
        <TabsTrigger value="story">Story</TabsTrigger>
        <TabsTrigger value="soundtrack">Soundtrack</TabsTrigger>
        <TabsTrigger value="direction">Direction</TabsTrigger>
      </TabsList>

      {Object.entries(reviews).map(([category, categoryReviews]) => (
        <TabsContent key={category} value={category} className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-semibold">
                {categoryReviews.averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-sm text-gray-400">
              Based on {categoryReviews.reviews.length} reviews
            </span>
          </div>

          <div className="grid gap-6">
            {categoryReviews.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{review.author}</h4>
                    <p className="text-sm text-gray-400">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-400"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{review.content}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}