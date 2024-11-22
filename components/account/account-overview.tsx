"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AccountOverview() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Account Overview</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              MEMBERSHIP & BILLING
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">john.doe@example.com</p>
                  <p className="text-sm text-muted-foreground">Password: ********</p>
                </div>
                <Button variant="link" className="h-auto p-0">
                  Change
                </Button>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Phone: +1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">For account recovery</p>
                </div>
                <Button variant="link" className="h-auto p-0">
                  Update
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              PLAN DETAILS
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Premium Plan</p>
                  <p className="text-sm text-muted-foreground">4K + HDR</p>
                </div>
                <Button variant="link" className="h-auto p-0">
                  Change Plan
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              SECURITY & PRIVACY
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Control access to this account</p>
                  <p className="text-sm text-muted-foreground">Manage devices, sign out everywhere</p>
                </div>
                <Button variant="link" className="h-auto p-0">
                  Manage Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Profile & Parental Controls</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Viewing Restrictions</p>
              <p className="text-sm text-muted-foreground">All Maturity Levels</p>
            </div>
            <Button variant="link" className="h-auto p-0">
              Edit
            </Button>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Profile Lock</p>
              <p className="text-sm text-muted-foreground">Prevent others from accessing your profile</p>
            </div>
            <Button variant="link" className="h-auto p-0">
              Set Up
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}