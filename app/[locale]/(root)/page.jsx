import Hero from "@/components/Hero";
import HomeWork from "@/components/HomeWork";
import HomeProject from "@/components/HomeProject";
import Homecourses from "@/components/Homecourses";
import HomeFeatures from "@/components/HomeFeatures";
import HomeClients from "@/components/HomeClients";
import ContactForm from "@/components/ContactForm";
import HomeBlog from "@/components/HomeBlog";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomeHero");
  return (
    <>
      <Hero
        title={t("title")}
        description={t("description")}
        img="/imgs/HomeHeroImg.png"
        link={t("link")}
      />
      <HomeWork />
      <HomeProject />
      <Homecourses />
      <HomeFeatures />
      <HomeClients />
      <ContactForm />
      {/* <HomeBlog /> */}
    </>
  );
}
