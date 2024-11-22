"use client";

import { User } from "lucide-react";

export default function AccountProfile() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
        <User className="w-12 h-12 text-muted-foreground" />
      </div>
      <h2 className="font-semibold text-xl">John Doe</h2>
      <p className="text-sm text-muted-foreground">Premium Plan</p>
      <p className="text-xs text-muted-foreground mt-1">Member since 2024</p>
    </div>
  );
}