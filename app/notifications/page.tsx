"use client";

import { Bell, Clock, Star, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllMovies } from "@/lib/data";

interface Notification {
  id: string;
  type: "new" | "recommendation" | "update";
  title: string;
  message: string;
  date: string;
  isRead: boolean;
}

export default function Notifications() {
  // Simulate notifications based on movies
  const movies = getAllMovies();
  const notifications: Notification[] = [
    {
      id: "1",
      type: "new",
      title: "New Arrival",
      message: `${movies[0].title} is now available to stream`,
      date: "Just now",
      isRead: false
    },
    {
      id: "2",
      type: "recommendation",
      title: "Recommended for You",
      message: `Based on your watching history, you might like ${movies[1].title}`,
      date: "2 hours ago",
      isRead: false
    },
    {
      id: "3",
      type: "update",
      title: "Continue Watching",
      message: `New episode of ${movies[2].title} is available`,
      date: "1 day ago",
      isRead: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "new":
        return <PlayCircle className="h-5 w-5 text-green-500" />;
      case "recommendation":
        return <Star className="h-5 w-5 text-yellow-500" />;
      case "update":
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <main className="min-h-screen bg-background pt-24 px-4 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Button variant="ghost" size="sm">Mark all as read</Button>
        </div>
        
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border ${
                notification.isRead ? 'bg-card/50' : 'bg-card border-red-600'
              }`}
            >
              <div className="flex gap-4">
                <div className="mt-1">{getIcon(notification.type)}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-muted-foreground">{notification.message}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {notification.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}