"use client";
import { HeroSection, HeroContainer, HeroTitle, HeroParagraph, Link } from "./styled";
import Image from "next/image";
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
        <Image
          src={img}
          alt="homeHero"
          width={700}
          height={700}
          style={{ width: '100%', height: 'auto' }}
          onLoadingComplete={() => setImageLoading(false)}
          priority={true}
        />
      </HeroContainer>
    </HeroSection>
  );
}
