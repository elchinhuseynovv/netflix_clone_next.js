"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { findMovieReviews } from "@/lib/data";
import { ReviewCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/language-context";

interface MovieReviewsProps {
  movieId: string;
}

export default function MovieReviews({ movieId }: MovieReviewsProps) {
  const reviews = findMovieReviews(movieId);
  const { t } = useLanguage();

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">{t("movie.reviews")}</h2>
      <Tabs defaultValue="acting" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="acting">{t("movie.acting")}</TabsTrigger>
          <TabsTrigger value="visuals">{t("movie.visuals")}</TabsTrigger>
          <TabsTrigger value="story">{t("movie.story")}</TabsTrigger>
          <TabsTrigger value="soundtrack">{t("movie.soundtrack")}</TabsTrigger>
          <TabsTrigger value="direction">{t("movie.direction")}</TabsTrigger>
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
                {t("movie.basedOnReviews").replace("{{count}}", categoryReviews.reviews.length.toString())}
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
    </Card>
  );
}