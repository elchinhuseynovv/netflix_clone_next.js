"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Play, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full px-4 lg:px-8 py-4 transition duration-500",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-red-600 font-bold text-2xl">AZEFLIX</Link>
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium hover:text-primary/80",
                pathname === "/" && "text-red-600"
              )}
            >
              Home
            </Link>
            <Link 
              href="/tv-shows" 
              className={cn(
                "text-sm font-medium hover:text-primary/80",
                pathname === "/tv-shows" && "text-red-600"
              )}
            >
              TV Shows
            </Link>
            <Link 
              href="/movies" 
              className={cn(
                "text-sm font-medium hover:text-primary/80",
                pathname === "/movies" && "text-red-600"
              )}
            >
              Movies
            </Link>
            <Link 
              href="/new" 
              className={cn(
                "text-sm font-medium hover:text-primary/80",
                pathname === "/new" && "text-red-600"
              )}
            >
              New & Popular
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/search">
            <Button 
              variant="ghost" 
              size="icon"
              className={cn(pathname === "/search" && "text-red-600")}
            >
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/notifications">
            <Button 
              variant="ghost" 
              size="icon"
              className={cn(pathname === "/notifications" && "text-red-600")}
            >
              <Bell className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/account">
            <Button 
              variant="ghost" 
              size="icon"
              className={cn(pathname === "/account" && "text-red-600")}
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}