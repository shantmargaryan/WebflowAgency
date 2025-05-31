import styled from "styled-components";
import { NextLink } from "@/styled/reset";


export const TransitionLinks = styled(NextLink)`
  padding: 6px 10px;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s;
  background-color: ${({ isactive }) => (isactive === "true" ? "#fcd980" : "transparent")};
  color: ${({ isactive }) => (isactive === "true" ? "#282938" : "#fff")};
  border-radius: 2.5625rem;
  transform: translateY(${({ isVisible }) => isVisible ? '0' : '-50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s, background-color 0.4s ease 0s, color 0.4s ease 0s;

  &:hover {
    background-color: #fcd980;
    color: #282938;
  }

  @media (${({ theme }) => theme.media.laptop}) {
    font-size: 18px;
  }
`;