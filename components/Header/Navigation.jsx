import { Nav, NavList } from "./styled";
import { TransitionLink } from "@/Utils/TransitionLink";
import { links } from "./links";

export default function Navigation({ isOpen, headerHeight, linkActive, setIsOpen, t }) {
  return (
    <Nav isopen={isOpen ? "true" : "false"} headerheight={headerHeight} role="navigation">
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
  );
}