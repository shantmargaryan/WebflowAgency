import { Nav, NavList } from "./styled";
import { TransitionLink } from "@/Utils/TransitionLink";
import { links } from "./links";
import { useState } from 'react';
import Overlay from "@/components/Overlay";

export default function Navigation({ isOpen, headerHeight, linkActive, setIsOpen, t }) {
  const handleTouchEnd = () => setIsOpen(false);

  return (
    <>
      <Nav
        isopen={isOpen ? "true" : "false"}
        headerheight={headerHeight}
        role="navigation"
        onTouchEnd={handleTouchEnd}
      >
        <NavList>
          {links.map(({ href, label }) => (
            <li key={href}>
              <TransitionLink
                href={href}
                isactive={label === linkActive ? "true" : "false"}
                onClick={() => setIsOpen(false)}
              >
                {t(label)}
              </TransitionLink>
            </li>
          ))}
        </NavList>
      </Nav>
      {
        isOpen && (
          <Overlay setIsOpen={setIsOpen} onClick={() => setIsOpen(false)} />
        )
      }
    </>
  );
}