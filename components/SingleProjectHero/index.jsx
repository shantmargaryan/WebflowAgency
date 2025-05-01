import { useTranslations } from "next-intl";
import {
  SingleProjectHeroSection,
  SingleProjectHeroContainer,
  SingleProjectsHeroBeforeTitle,
  SingleProjectHeroTitle,
  SingleProjectHeroParagraph
} from "./styled";


export default function SingleProjectHero() {
  const t = useTranslations("SingleProjectHero");


  return (
    <SingleProjectHeroSection>
      <SingleProjectHeroContainer>
        <SingleProjectsHeroBeforeTitle>
          {t("beforeTitle")}
        </SingleProjectsHeroBeforeTitle>
        <SingleProjectHeroTitle>
          {t("title")}
        </SingleProjectHeroTitle>
        <SingleProjectHeroParagraph>
          {t("description")}
        </SingleProjectHeroParagraph>
      </SingleProjectHeroContainer>
    </SingleProjectHeroSection>
  );
};