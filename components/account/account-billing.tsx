"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AccountBilling() {
  const nextBillingDate = new Date();
  nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Billing Information</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              CURRENT PLAN
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Premium Plan</p>
                  <p className="text-sm text-muted-foreground">4K + HDR • 4 Screens</p>
                </div>
                <Button variant="outline">Change Plan</Button>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm">Next billing date: {nextBillingDate.toLocaleDateString()}</p>
                <p className="text-sm text-muted-foreground mt-1">$19.99/month</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              PAYMENT METHOD
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-card p-2 rounded">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                      alt="Mastercard"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Mastercard ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              BILLING HISTORY
            </h4>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => {
                const date = new Date();
                date.setMonth(date.getMonth() - i);
                return (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{date.toLocaleDateString()}</p>
                      <p className="text-sm text-muted-foreground">Premium Plan • $19.99</p>
                    </div>
                    <Button variant="link">Download</Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}