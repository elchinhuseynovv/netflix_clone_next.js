"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n/language-context";
import LoginForm from "@/components/auth/login-form";
import SocialLogin from "@/components/auth/social-login";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="text-red-600 font-bold text-4xl">
            AZEFLIX
          </Link>
          <h2 className="mt-6 text-2xl font-bold">
            {t("auth.welcomeBack")}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("auth.loginToContinue")}
          </p>
        </div>

        <div className="space-y-6">
          <LoginForm />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t("auth.orContinueWith")}
              </span>
            </div>
          </div>

          <SocialLogin />

          <p className="text-center text-sm">
            {t("auth.noAccount")}{" "}
            <Link
              href="/signup"
              className="font-semibold text-red-600 hover:text-red-500"
            >
              {t("auth.signUp")}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}