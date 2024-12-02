"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n/language-context";

export default function AccountSettings() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">{t("settings.playbackSettings")}</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>{t("settings.videoQuality")}</Label>
            <Select defaultValue="auto">
              <SelectTrigger>
                <SelectValue placeholder={t("settings.videoQuality")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="4k">4K Ultra HD</SelectItem>
                <SelectItem value="1080p">1080p</SelectItem>
                <SelectItem value="720p">720p</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="autoplay">{t("settings.autoplayNext")}</Label>
              <p className="text-sm text-muted-foreground">{t("settings.autoplayDescription")}</p>
            </div>
            <Switch id="autoplay" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="preview">{t("settings.autoplayPreviews")}</Label>
              <p className="text-sm text-muted-foreground">{t("settings.previewsDescription")}</p>
            </div>
            <Switch id="preview" defaultChecked />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">{t("settings.languageSettings")}</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>{t("settings.displayLanguage")}</Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue placeholder={t("settings.displayLanguage")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="tr">Türkçe</SelectItem>
                <SelectItem value="az">Azərbaycan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{t("settings.audioPreference")}</Label>
            <Select defaultValue="original">
              <SelectTrigger>
                <SelectValue placeholder={t("settings.audioPreference")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="original">Original</SelectItem>
                <SelectItem value="dubbed">Dubbed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{t("settings.subtitleLanguage")}</Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue placeholder={t("settings.subtitleLanguage")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="tr">Türkçe</SelectItem>
                <SelectItem value="az">Azərbaycan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">{t("settings.downloadSettings")}</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="wifi-only">{t("settings.wifiOnly")}</Label>
              <p className="text-sm text-muted-foreground">{t("settings.wifiOnlyDescription")}</p>
            </div>
            <Switch id="wifi-only" defaultChecked />
          </div>

          <div className="space-y-2">
            <Label>{t("settings.downloadQuality")}</Label>
            <Select defaultValue="standard">
              <SelectTrigger>
                <SelectValue placeholder={t("settings.downloadQuality")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{t("settings.storageLocation")}</Label>
            <Input type="text" placeholder="/downloads" disabled />
          </div>
        </div>
      </Card>
    </div>
  );
}