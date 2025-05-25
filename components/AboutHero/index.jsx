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

export default function AboutHero() {
  const t = useTranslations("AboutHero");
  const [imageloading, setImageLoading] = useState(true);

  return (
    <AboutSection>
      <AboutContainer>
        <Content>
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
        <AboutImg src="/imgs/OfficeImg2.jpg"
          alt="aboutHero"
          width={700}
          height={700}
          style={{ width: '100%', height: 'auto' }}
          onLoad={() => setImageLoading(false)}
          priority={false}
          imageLoading={imageloading}
        />
      </AboutContainer>
    </AboutSection>
  );
}