"use client";
import { HeroSection, HeroContainer, HeroContent, HeroTitle, HeroParagraph, Link, HeroImg } from "./styled";
import { useState } from "react";
import IntersectionComponent from "@/Utils/Intersection";

export default function Hero({ title, description, img, link }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleIntersect = () => {
    setIsVisible(true);
  };

  return (
    <HeroSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <HeroContainer>
        <HeroContent isVisible={isVisible}>
          <HeroTitle>
            {title}
          </HeroTitle>
          <HeroParagraph>
            {description}
          </HeroParagraph>
          <Link href="/projects">
            {link}
          </Link>
        </HeroContent>
        <HeroImg
          isVisible={isVisible}
          src={img}
          alt="homeHero"
          width={700}
          height={700}
          style={{ width: '100%', height: 'auto' }}
          priority={true}
        />
      </HeroContainer>
    </HeroSection >
  );
}
