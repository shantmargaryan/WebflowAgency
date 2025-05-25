"use client"
import styled from "styled-components";
import { SecondaryTitle, Paragraph, Container, Section, Img, SubTitle } from "@/styled/mixStyle";


export const WhoWeAreSection = styled.section`
  ${Section}
  padding-block-start: 5rem;
  transition: background-color 0.4s ease 0s;
  
  [data-theme="light"] & {
    background-color:#F4F5F5;
  }
`

export const WhoWeAreContainer = styled.div`
  ${Container}
  `

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  align-items: end;
  gap: 1rem;
  margin-block-end: 3rem;
`

export const Content = styled.div`
  `

export const BeforeTitle = styled.span`
  ${SubTitle}
  `

export const Title = styled.h2`
  ${SecondaryTitle}
  `

export const Description = styled.p`
  ${Paragraph}
  `

export const WhoWeAreImg = styled(Img)`
  aspect-ratio: 3;
  `
