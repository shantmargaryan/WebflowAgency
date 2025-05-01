import styled from "styled-components";
import { Container, SecondaryTitle, Paragraph } from "@/styled/mixStyle";
import { ListReset, ButtonReset, LinkReset } from "@/styled/reset";

export const FooterWrapper = styled.footer`
padding-block-start: 3rem;
background-color: ${({ theme }) => theme.colors.tintBlue};
`

export const FooterContainer = styled.div`
  ${Container}
  `

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-block-end: 3rem;
  `

export const Title = styled.h3`
  ${SecondaryTitle}
  color: ${({ theme }) => theme.colors.white};
  `

export const FooterParagraph = styled.p`
  ${Paragraph}
  max-width: 28rem;
  color: ${({ theme }) => theme.colors.white};
  `

export const SocialList = styled.ul`
  ${ListReset}
  display: flex;
  gap: .5rem;
  margin-block-start: 1rem;
  `

export const Item = styled.li`

& svg {
  fill: ${({ theme }) => theme.colors.white};
}
`

export const Contact = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: min(100%, 30rem);
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
`

export const ContactTitle = styled.h3`
  ${SecondaryTitle}
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.2rem;
`

export const ContactsLinks = styled.a`
  ${LinkReset}
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 400;
`

export const ScrollToTop = styled.button`
  ${ButtonReset}
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  opacity: ${({ isvisible }) => (isvisible ? 1 : 0)};
  pointer-events: ${({ isvisible }) => (isvisible ? "auto" : "none")};
  transition: opacity 0.4s ease 0s;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  [data-theme="light"] & {
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  }

  svg {
    transition: transform 0.4s ease 0s;
  }

  &:hover svg {
    transform: translateY(-2px);
  }
  `