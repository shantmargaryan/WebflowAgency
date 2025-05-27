import styled from "styled-components";
import { Img } from "@/styled/mixStyle";
import { NextLink } from "@/styled/reset";

export const LogoLink = styled(NextLink)`
  ${NextLink}
  position: relative;
  z-index: 11;
`;

export const LogoImg = styled(Img)`
  ${Img}
`;