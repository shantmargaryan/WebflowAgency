import styled from "styled-components";
import { ListReset, NextLink, ButtonReset, LinkReset } from "../../styled/reset";
import { Container } from "../../styled/mixStyle";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding-block: 1rem;
  background-color: ${({ theme }) => theme.colors.tintBlue};
`;

export const HeaderContainer = styled.div`
  ${Container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
`;

export const Nav = styled.nav`
  position: fixed;
  top: ${({ isopen }) => (isopen === "true" ? 0 : "-100%")};
  opacity: ${({ isopen }) => (isopen === "true" ? 1 : 0)};
  padding-inline-start: 1.5625rem;
  padding-top: ${({ headerheight }) => headerheight}px;
  right: 0;
  z-index: 10;
  display: inline-flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.tintBlue};
  transition: top ease 0.6s, opacity ease 0.6s;

  @media (${({ theme }) => theme.media.laptop}) {
    position: static;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: 1;
    height: auto;
    padding: 0;
    background-color: transparent;
  }
`;

export const PhoneNumber = styled.a`
  ${LinkReset}
    position: relative;
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: fit-content;
    overflow: hidden;
    padding: 0.625rem;
    background-color: #fcd980;
    color: #282938;
    border-radius: 50%;

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

  @media (${({ theme }) => theme.media.laptop}) {
    font-size: 18px;
  }
  `

export const NavList = styled.ul`
  ${ListReset}
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (${({ theme }) => theme.media.laptop}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Burger = styled.button`
  ${ButtonReset}
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  flex-shrink: 0;
  width: 30px;
  height: 20px;
  border: none;
  cursor: pointer;

  @media (${({ theme }) => theme.media.laptop}) {
    display: none;
  }
`;

export const BurgerLine = styled.span`
  width: 100%;
  height: 2.7px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  &:nth-child(2) {
    width: 70%;
  }

  &:nth-child(3) {
    width: 50%;
  }
`;

export const UtilButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
