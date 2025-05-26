import styled from "styled-components";
import {  Container, Title, Paragraph } from "@/styled/mixStyle";

export const CoursesHeroSection = styled.section`
  padding-block: 10rem;
`;

export const CoursesHeroContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;


export const CoursesHeroTitle = styled.h1`
  ${Title}
`;

export const CoursesHeroDescription = styled.p`
  ${Paragraph}
  max-width: 50rem;
`;