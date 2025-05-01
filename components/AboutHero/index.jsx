import { useTranslations } from "next-intl";
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
        <AboutImg path="/imgs/AboutHeroImg.png"
          alt="aboutHero"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
      </AboutContainer>
    </AboutSection>
  );
}