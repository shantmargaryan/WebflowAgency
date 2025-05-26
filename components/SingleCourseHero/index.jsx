"use client";
import { useTranslations } from "next-intl";
import {
  CoursesHeroSection,
  CoursesHeroContainer,
  CoursesHeroTitle,
  CoursesHeroDescription,
} from "./styled";

export default function SingleCourseHero() {
  const t = useTranslations("CoursesSingleHero");

  return (
    <CoursesHeroSection>
      <CoursesHeroContainer>
        <span>{t("beforeTitle")}</span>
        <CoursesHeroTitle>{t("title")}</CoursesHeroTitle>
        <CoursesHeroDescription>
          {t("description")}
        </CoursesHeroDescription>
      </CoursesHeroContainer>
    </CoursesHeroSection>
  );
}