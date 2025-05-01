"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";


export const FollowSection = styled.section`
  ${Section}
  `

export const FollowContainer = styled.div`
  ${Container}
  `

export const FollowTitle = styled.h2`
  ${SecondaryTitle}
  margin-block-end: 3rem;
  text-align: center;
  `

export const List = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( 270px, 1fr ) );
  gap: 1.5rem;
  `

export const Item = styled.li`
  `

export const FollowImg = styled(Img)`
  width: 17rem;
  height: 1.5rem;
  margin-block-end: 2rem;
  `

export const SmallTitle = styled.h3`
  ${SecondaryTitle}
  font-size: 1.5rem;
  font-weight: 500;
  `

export const Decoration = styled.p`
  ${Paragraph}
  `