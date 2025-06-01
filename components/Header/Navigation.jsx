import { useState } from "react";
import { Nav, NavList } from "./styled";
import { TransitionLink } from "@/Utils/TransitionLink";
import { links } from "./links";
import Overlay from "@/components/Overlay";
import IntersectionComponent from "@/Utils/Intersection";



export default function Navigation({ isOpen, headerHeight, linkActive, setIsOpen, t }) {
  const handleTouchEnd = () => setIsOpen(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  return (
    <>
      <IntersectionComponent onIntersect={handleIntersect} />
      <Nav
        isopen={isOpen ? "true" : "false"}
        headerheight={headerHeight}
        role="navigation"
        onTouchEnd={handleTouchEnd}
      >
        <NavList isVisible={isVisible}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <TransitionLink
                isVisible={isVisible}
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