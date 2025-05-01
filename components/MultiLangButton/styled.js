import styled from "styled-components";
import { ButtonReset } from "@/styled/reset";

export const MultiLangBox = styled.div`
  display: flex;
  z-index: 10;
`;

export const LangButton = styled.button`
  ${ButtonReset}
  padding: .525rem;
  background-color: rgb(18, 20, 60);
  border-radius: 0.5rem 0 0 0.5rem;
  border: 0.1875rem solid rgb(18, 20, 60);
  color: ${({ theme }) => theme.colors.white};

  &:active {
    background-color: rgb(28, 30, 83);
  }

  &:nth-child(2) {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;
