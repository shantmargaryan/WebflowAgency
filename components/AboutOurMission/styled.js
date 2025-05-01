"use client"
import styled from "styled-components";
import { Section, Container, SubTitle, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";


export const OurMissionSection = styled.section`
  ${Section}
  padding-block: 10%;
  transition: background-color 0.4s ease 0s;

  [data-theme="light"] & {
    background-color: ${({ theme }) => theme.colors.accent};
  }
  `

export const OurMissionContainer = styled.div`
  ${Container}
  `

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  gap: 2rem;

  &:not(:last-child) {
    margin-block-end: 3rem;
  }
  `

export const Content = styled.div`
  `

export const BeforeTitle = styled.span`
  ${SubTitle}
  `

export const Title = styled.h3`
  ${SecondaryTitle}
  `

export const OurMissionDecoration = styled.p`
  ${Paragraph}
  `

export const OurMissionImg = styled(Img)`

  `

