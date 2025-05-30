import { useTranslations } from "next-intl";
import {
  HeroSection,
  HeroContainer,
  HeroBeforeTitle,
  HeroTitle,
  HeroParagraph
} from "./styled";


export default function SingleProjectHero({beforeTitle, title, description}) {


  return (
    <HeroSection>
      <HeroContainer>
        <HeroBeforeTitle>
          {beforeTitle}
        </HeroBeforeTitle>
        <HeroTitle>
          {title}
        </HeroTitle>
        <HeroParagraph>
          {description}
        </HeroParagraph>
      </HeroContainer>
    </HeroSection>
  );
};