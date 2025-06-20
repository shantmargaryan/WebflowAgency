import { poppins } from "@/styled/fonts";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import React from "react";
import { notFound } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const metadata = {
  title: {
    default: "Welcom To IT",
    template: "%s - Welcom To IT",
  },
  description: "WEBFOWFLAGYAGIEN - Վեբ ձեւավորման եւ զարգացման մասնագիտական ​​ծառայություններ",
  keywords: "Վեբ flow, վեբ ձեւավորում, վեբ մշակում, գործակալություն, թվային գործակալություն",
  openGraph: {
    type: "website",
    locale: "am-AM",
    url: "",
    siteName: "Welcom To IT",
    title: "Welcom To IT - Վեբ ձեւավորման եւ զարգացման մասնագիտական ​​ծառայություններ",
    description: "Welcom To IT - Վեբ ձեւավորման եւ զարգացման մասնագիտական ​​ծառայություններ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://web-flow.am",
    languages: {
      'am-AM': '/am',
      'en-US': '/en',
    },
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <html lang={locale}>
      <body className={poppins.variable}>
        <NextIntlClientProvider>
          <NextThemesProvider>
            {children}
          </NextThemesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
