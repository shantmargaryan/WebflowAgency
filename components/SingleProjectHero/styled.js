"use client"
import styled from "styled-components";
import { Title, Paragraph, SubTitle, Container, Section } from "@/styled/mixStyle";


export const SingleProjectHeroSection = styled.section`
  ${Section}
  padding-block-start: 10rem;
  padding-block-end: 5rem;
  `

export const SingleProjectHeroContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  `

  export const SingleProjectsHeroBeforeTitle = styled.span`
  ${SubTitle}
  `

export const SingleProjectHeroTitle = styled.h1`
  ${Title}
  max-width: 50rem;
  `

export const SingleProjectHeroParagraph = styled.p`
  ${Paragraph}
  max-width: 50rem;
  `