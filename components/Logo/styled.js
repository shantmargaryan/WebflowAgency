import styled from "styled-components";
import { Img } from "@/styled/mixStyle";
import { NextLink } from "../../styled/reset";

export const LogoLink = styled(NextLink)`
  ${NextLink}
  display: block;
  z-index: 11;
  width: fit-content;
  text-decoration: none;
  font-size: clamp(1rem, 5vw, 2rem);
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoImg = styled(Img)`
  ${Img}
`;