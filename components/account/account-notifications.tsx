"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Mail, Phone } from "lucide-react";

export default function AccountNotifications() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="push">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get notified about new releases and recommendations</p>
                </div>
              </div>
              <Switch id="push" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="email">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about your account and new content</p>
                </div>
              </div>
              <Switch id="email" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="sms">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get important updates via text message</p>
                </div>
              </div>
              <Switch id="sms" />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Notification Categories</h3>
        <div className="space-y-4">
          {[
            "New Releases",
            "Recommendations",
            "Account Updates",
            "Special Offers",
            "Watchlist Updates"
          ].map((category) => (
            <div key={category} className="flex items-center justify-between">
              <Label htmlFor={category.toLowerCase().replace(" ", "-")}>{category}</Label>
              <Switch id={category.toLowerCase().replace(" ", "-")} defaultChecked />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}