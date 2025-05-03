"use client";
import { HeroSection, HeroContainer, HeroTitle, HeroParagraph, Link, HeroImg } from "./styled";
import { useState } from "react";

export default function Hero({ title, description, img, link }) {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <HeroSection>
      <HeroContainer>
        <div>
          <HeroTitle>
            {title}
          </HeroTitle>
          <HeroParagraph>
            {description}
          </HeroParagraph>
          <Link href="/projects">
            {link}
          </Link>
        </div>
        <HeroImg
          src={img}
          alt="homeHero"
          width={700}
          height={700}
          style={{ width: '100%', height: 'auto' }}
          onLoad={() => setImageLoading(false)}
          imageLoading={imageLoading}
          priority={false}
        />
      </HeroContainer>
    </HeroSection>
  )
}
