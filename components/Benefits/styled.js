"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";


export const BenefitsSection = styled.section`
  ${Section}
  `

export const BenefitsContainer = styled.div`
  ${Container}
  `

export const BenefitsTitle = styled.h3`
  ${SecondaryTitle}
  margin-block-end: 4rem;
  text-align: center;
  `

export const BenefitsList = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( 300px, 1fr ) );
  gap: 1.5rem;
  `

export const BenefitsItem = styled.li`
  padding: min(2rem, 5vw);
  transition: background-color 0.4s ease 0s;

[data-theme="light"] & {
  background-color: ${({ theme }) => theme.colors.gray};
  }
`

export const BenefitsImg = styled(Img)`
margin-block-end: 1.5rem;
`

export const SmallTitle = styled.h3`
  ${SecondaryTitle}
  margin-block-end: .5rem;
  font-size: 1.5rem;
  `

export const SmallParagraph = styled.p`
  ${Paragraph}
  `