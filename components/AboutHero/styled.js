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
  width: 100%;

  @media (${({ theme }) => theme.media.laptop}) {
    max-width: 30.25rem;
  }
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
  `