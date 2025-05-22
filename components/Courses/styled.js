"use client";
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";
import { ListReset, NextLink } from "@/styled/reset";


export const CoursesSection = styled.section`
  ${Section}
`;

export const CoursesContainer = styled.div`
  ${Container}
`;

export const CoursesImg = styled(Img)`
height: 350px;
margin-block-end: 20px;
border-radius: 10px;
`;

export const CoursesBefourTitle = styled.span`
margin-block-end: 10px;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.yellow};
padding: 5px 10px;
border-radius: 2.5625rem;
color: ${({ theme }) => theme.colors.darkBlue};
`;

export const CoursesTitle = styled.h2`
  ${SecondaryTitle}
  font-size: 1.5rem;
`;

export const CoursesDescription = styled.p`
  ${Paragraph}
  margin-block-end: 20px;
`;

export const CoursesList = styled.ul`
${ListReset}
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 20px;
`

export const CoursesItem = styled.li`
display: inline-flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
`

export const CoursesLink = styled(NextLink)`
  
  &:hover {
    text-decoration: underline;
  }
`