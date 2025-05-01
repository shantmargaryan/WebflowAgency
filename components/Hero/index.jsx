"use client";
import { HeroSection, HeroContainer, HeroTitle, HeroParagraph, Link, HeroImg } from "./styled";


export default function Hero({ title, description, img, link }) {

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
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </HeroContainer>
    </HeroSection>
  )
}
