"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Movie } from "@/lib/types";
import { Award, User } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

interface MovieCastCrewProps {
  movie: Movie;
}

export default function MovieCastCrew({ movie }: MovieCastCrewProps) {
  const { t } = useLanguage();

  const director = t(`movies.${movie.id}.director`) || movie.director;
  const cast = t(`movies.${movie.id}.cast`) || movie.cast;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">{t("movie.castAndCrew")}</h2>
      <div className="grid gap-6">
        <div>
          <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
            <Award className="w-5 h-5" /> {t("movie.director")}
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <div className="font-medium">{director}</div>
              <div className="text-sm text-muted-foreground">{t("movie.director")}</div>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
            <User className="w-5 h-5" /> {t("movie.cast")}
          </h3>
          <div className="grid gap-4">
            {cast.map((actor, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">{actor}</div>
                  <div className="text-sm text-muted-foreground">{t("movie.cast")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}