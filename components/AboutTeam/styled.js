"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Img } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";


export const TeamSection = styled.section`
  ${Section}
  `

export const TeamContainer = styled.div`
  ${Container}
  `

export const TeamTitle = styled.h3`
  ${SecondaryTitle}
  margin-block-end: 3rem;
  text-align: center;

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `

export const TeamList = styled.ul`
  ${ListReset}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1.5rem;
  `

export const TeamItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  &:nth-child(1){
    transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
    opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
    transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  }

  &:nth-child(2){
    transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
    opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
    transition: transform 0.6s ease 0s, opacity 0.5s ease 100ms;
  }
    &:nth-child(3){
    transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
    opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
    transition: transform 0.6s ease 0s, opacity 0.5s ease 200ms;
  }
  `

export const TeamImg = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const TeamName = styled.span`
  font-size: 1.5rem;
  font-weight: 500;

  [data-theme="light"] & {
    color: #1D2130;
  }
  `

export const TeamPosition = styled.span`
  max-width: 200px;
  font-weight: 400;
  text-align: center;

  [data-theme="light"] & {
    color:rgba(29, 33, 48, 0.7);
  }
  `