import {
  HeroSection,
  HeroContainer,
  HeroBeforeTitle,
  HeroContent,
  HeroTitle,
  HeroParagraph,
} from "./styled";




export default function SecoundHero({ beforeTitle, title, description }) {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroBeforeTitle>{beforeTitle}</HeroBeforeTitle>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroParagraph>{description}</HeroParagraph>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}