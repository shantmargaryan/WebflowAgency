import styled from "styled-components";
import { NextLink } from "@/styled/reset";


export const TransitionLinks = styled(NextLink)`
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ isactive }) => (isactive === "true" ? "#fcd980" : "#fff")};

  @media (${({ theme }) => theme.media.laptop}) {
    font-size: 18px;
  }
`;