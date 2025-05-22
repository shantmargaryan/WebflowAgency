import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import { useTranslations } from "next-intl";

export default function CoursesPage() {
  const t = useTranslations("coursesHero");
  return (
    <>
      <Hero
        title={t("title")}
        description={t("description")}
        img="/imgs/HomeHeroImg.png"
        link={t("link")}
      />
      <Courses />
    </>
  );
}