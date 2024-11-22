"use client";

import { User, Settings, CreditCard, History, Heart, LogOut, Film, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AccountOverview from "@/components/account/account-overview";
import AccountBilling from "@/components/account/account-billing";
import AccountProfile from "@/components/account/account-profile";
import { useState } from "react";

export default function Account() {
  const [activeSection, setActiveSection] = useState("overview");

  const menuItems = [
    { icon: User, label: "Account Overview", id: "overview" },
    { icon: CreditCard, label: "Billing & Plans", id: "billing" },
    { icon: Film, label: "Viewing Activity", id: "activity" },
    { icon: Bell, label: "Notifications", id: "notifications" },
    { icon: Heart, label: "My List", id: "list" },
    { icon: Settings, label: "Settings", id: "settings" }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <AccountOverview />;
      case "billing":
        return <AccountBilling />;
      default:
        return <AccountOverview />;
    }
  };

  return (
    <main className="min-h-screen bg-background pt-24 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-[250px_1fr]">
          {/* Sidebar */}
          <Card className="p-6 h-fit">
            <AccountProfile />
            <Separator className="my-6" />
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(item.id)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
              <Separator className="my-2" />
              <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-600/10">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </nav>
          </Card>

          {/* Main Content */}
          <div className="space-y-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </main>
  );
}