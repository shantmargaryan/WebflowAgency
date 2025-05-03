"use client"
import styled from "styled-components";
import { SecondaryTitle, Section, Container, primaryLink, Img, Paragraph } from "@/styled/mixStyle";
import { ListReset, LinkReset } from "@/styled/reset";


export const ProjectSection = styled.section`
  ${Section}
`

export const ProjectContainer = styled.div`
  ${Container}
  `

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  gap: .5rem;
  margin-block-end: 3rem;
  `

export const ProjectTitle = styled.h3`
  ${SecondaryTitle}
  `

export const List = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
  gap: 1.5rem;
`

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `

export const Item = styled.li`
  position: relative;
  height: fit-content;
  `

export const ItemContent = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
  max-width: min(100%, 30rem);
  height: 100%;
  padding: 1.5rem;
  background-color: rgba(28, 30, 83, 0.7);
  `

export const ItemTitle = styled.h3`
  ${SecondaryTitle}
  margin-block-end: .5rem;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: ${({ theme }) => theme.colors.white};
  `

export const ItemParagraph = styled.p`
  ${Paragraph}
  margin-block-end: .5rem;
  color: ${({ theme }) => theme.colors.white};
  `

export const ItemLink = styled(primaryLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.yellow};
  transition: color 0.4s ease;

  &:hover svg {
    transform: translateX(5px);
  }

  & svg {
    stroke: ${({ theme }) => theme.colors.yellow};
    stroke-width: 1.5px;
    transition: transform 0.4s ease;
  }
  `

export const ViewMore = styled(primaryLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & svg {
    stroke-width: 1.5px;
    transition: transform 0.4s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
  `

export const Link = styled.a`
  ${LinkReset}
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & svg {
    transition: transform 0.3s ease;
    stroke-width: 0.1rem;
  }

  &:hover svg {
    transform: translateX(5px);
  }
  `

export const ImgLink = styled(primaryLink)`
  width: 100%;
  `

export const ProjectImg = styled(Img)`
  `
