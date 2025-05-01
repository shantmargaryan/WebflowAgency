import { poppins } from "@/styled/fonts";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import React from "react";
import { notFound } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const metadata = {
  title: {
    default: "Web flow",
    template: "%s - Web flow",
  },
  description: "WebflowAgency - Professional web design and development services",
  keywords: "webflow, web design, web development, agency, digital agency",
  openGraph: {
    type: "website",
    locale: "am-AM",
    url: "https://web-flow.am",
    siteName: "Web flow",
    title: "Web flow - Professional Web Design Agency",
    description: "WebflowAgency - Professional web design and development services",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://web-flow.am",
    languages: {
      'hy-AM': '/hy',
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
