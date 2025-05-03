import styled from "styled-components";
import { Section, Container, Title, Paragraph, primaryLink, Img } from "@/styled/mixStyle";

export const HeroSection = styled.section`
  ${Section}
  padding-block-start: 10rem;
  padding-block-end: 5rem;
  background-color: ${({ theme }) => theme.colors.tintBlue};
  `

export const HeroContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  align-items: center;
  gap: 1.5rem;
  height: 100%;
  `

export const HeroTitle = styled.h1`
  ${Title}
  color: ${({ theme }) => theme.colors.white};
  `

export const HeroParagraph = styled.p`
  ${Paragraph}
  margin-block-end: 2.125rem;
  color: ${({ theme }) => theme.colors.white};
  `

export const Link = styled(primaryLink)`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 2.5625rem;
    font-weight: 400;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color:rgba(231, 178, 44, 0.6);
      transition: transform 0.4s ease;
      transform-origin: right;
      transform: scaleX(0);
    }

    &:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
`

export const HeroImg = styled(Img)`
  opacity: ${({ imageLoading }) => imageLoading ? '0' : '1'};
  filter: blur(${({ imageLoading }) => imageLoading ? '10px' : '0px'});
  `


