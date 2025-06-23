"use client";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import CoursesForm from "@/components/CoursesForm";
import { useTranslations } from "next-intl";
import { Suspense } from "react";


export default function CoursesPage() {
  const t = useTranslations("coursesHero");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero
        title={t("title")}
        description={t("description")}
        img="/imgs/CoursesHeroImg.png"
        link={t("link")}
        href="#register"
      />
      <Courses />
      <CoursesForm />
    </Suspense>
  );
}