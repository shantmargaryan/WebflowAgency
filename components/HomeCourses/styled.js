import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, primaryLink, Img } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";


export const HomecoursesSection = styled.section`
  ${Section}
`;

export const HomecoursesContainer = styled.div`
  ${Container}
`

export const HomecoursesTitle = styled.h2`
  ${SecondaryTitle}
  `

export const HomecoursesParagraph = styled.p`
  ${Paragraph}
  max-width: 30rem;
  text-align: center;
`;

export const HomecoursesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 5rem;
  `

export const HomecoursesList = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`

export const HomecoursesItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

export const HomecoursesImg = styled(Img)`
margin-block-end: 1rem;
`

export const HomecoursesSmallTitle = styled.h3`
  ${SecondaryTitle}
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const HomecoursesDescription = styled.p`
${Paragraph}
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`

export const HomecoursesLink = styled(primaryLink)`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 2.5625rem;
    font-weight: 500;

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