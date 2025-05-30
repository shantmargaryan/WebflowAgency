import styled from "styled-components";
import { Section, Container, Paragraph, Title } from "@/styled/mixStyle";

export const HeroSection = styled.section`
  ${Section}
  padding-block-start: 10rem;
  `

export const HeroContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  `

  export const HeroBeforeTitle = styled.span`
  color:  ${({ theme }) => theme.colors.yellow};
  font-weight: 600;
  `

  export const HeroContent = styled.div`
  max-width: 50rem;
  `

  export const HeroTitle = styled.h1`
  ${Title}
  `

export const HeroParagraph = styled.p`
  ${Paragraph}
  `
