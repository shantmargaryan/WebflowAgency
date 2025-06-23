"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  AboutSection,
  AboutContainer,
  Content,
  BeforeTitle,
  AboutTitle,
  AboutParagraph,
  AboutImg
} from "./styled";
import IntersectionComponent from "@/Utils/Intersection";

export default function AboutHero() {
  const t = useTranslations("AboutHero");
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  return (
    <AboutSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <AboutContainer>
        <Content isVisible={isVisible}>
          <BeforeTitle>
            {t("beforeTitle")}
          </BeforeTitle>
          <AboutTitle>
            {t("title")}
          </AboutTitle>
          <AboutParagraph>
            {t("description")}
          </AboutParagraph>
        </Content>
        <AboutImg isVisible={isVisible} src="/imgs/OfficeImg2.png"
          alt="aboutHero"
          width={700}
          height={700}
          style={{ width: '100%', height: 'auto' }}
          priority={false}
        />
      </AboutContainer>
    </AboutSection>
  );
}