"use client"
import styled from "styled-components";
import { Title, Paragraph, Container, Section, Img, SubTitle } from "@/styled/mixStyle";


export const AboutSection = styled.section`
  ${Section}
  padding-block-start: 10rem;
  `

export const AboutContainer = styled.div`
  ${Container}
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  gap: 1.5rem;
  `

export const Content = styled.div`

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `

export const BeforeTitle = styled.span`
  ${SubTitle}
  `

export const AboutTitle = styled.h2`
  ${Title}
  margin-block-end: 1rem;
  `

export const AboutParagraph = styled.p`
  ${Paragraph}
  `

export const AboutImg = styled(Img)`
  aspect-ratio: 3/2;

  transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `