"use client"
import styled from "styled-components";
import { Section, Container, Title, Paragraph, SubTitle } from "@/styled/mixStyle";


export const ProjectsHeroSection = styled.section`
  ${Section}
  padding-block-start: 10rem;
  padding-block-end: 5rem;
  transition: background-color 0.4s ease 0s;

  [data-theme="light"] & {
    background-color:${({ theme }) => theme.colors.gray};
  }
  `

export const ProjectsHeroContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  `

export const ProjectsHeroTitle = styled.h1`
  ${Title}
  `

export const ProjectsHeroParagraph = styled.p`
  ${Paragraph}
  max-width: 40rem;
  margin-block-end: 2.125rem;
  `

export const ProjectsHeroBeforeTitle = styled.span`
  ${SubTitle}
  `
