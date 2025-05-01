"use client";
import { useState, useEffect, useRef } from "react";
import { TransitionLink } from "@/Utils/TransitionLink";
import {
  HeaderWrapper,
  HeaderContainer,
  Nav,
  NavList,
  Burger,
  BurgerLine,
  UtilButtons,
  PhoneNumber
} from "./styled";
import Logo from "../Logo";
import MultiLangButton from "../MultiLangButton";
import ThemeSwicher from "../ThemeSwicher";
import { useTranslations } from "next-intl";
import { links } from "./links";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const t = useTranslations("NavLinks");


  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isOpen) {
        document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`;
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.paddingRight = "0";
        document.body.style.overflow = "visible";
      }
    }
  }, [isOpen]);

  const header = headerRef?.current;
  const headerHeight = header?.offsetHeight;
  const pathname = usePathname();
  const linkActive = pathname.slice(4).toLowerCase() === "" ? "home" : pathname.slice(4).toLowerCase();



  return (
    <HeaderWrapper ref={headerRef}>
      <HeaderContainer>
        <Logo />
        <Nav isopen={isOpen ? "true" : "false"} headerheight={headerHeight}>
          <NavList>
            {
              links.map(({ href, label }) => (
                <li key={href}>
                  <TransitionLink href={href}
                    isactive={label === linkActive ? "true" : "false"}
                    onClick={() => setIsOpen(false)}>
                    {t(label)}
                  </TransitionLink>
                </li>
              ))
            }
          </NavList>
          <PhoneNumber href="tel:+37455212205">
            +37455212205
          </PhoneNumber>
        </Nav>
        <UtilButtons>
          <MultiLangButton />
          <ThemeSwicher />
        </UtilButtons>
        <Burger onClick={() => setIsOpen(!isOpen)}>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
        </Burger>
      </HeaderContainer>
    </HeaderWrapper >
  );
}