import styled from "styled-components";
import Logo from "./navbar/Logo";
import { breakpoints as bp } from "../../GlobalStyle";
import Backdrop from "../../ui/Backdrop";

import NavLinksGroup from "./navbar/NavLinksGroup";
import { useState } from "react";

const StyledNav = styled.nav`
  background-color: var(--sidebar-bg);
  width: ${(p) => (p.compact ? "70px" : "var(--navbar-width)")};
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition-property: width, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
  &::before {
    content: "";
    ${"" /* background-color: rgba(var(--color-secondary-rgb), 0.2); */}
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media (max-width: ${bp.desktop}) {
    position: fixed;
    width: var(--navbar-width);
    transform: translate3d(
      ${(p) =>
        p.visible ? 0 : "calc(var(--navbar-width) - var(--navbar-width)*2)"},
      0,
      0
    );
    transition: transform 0.3s
      ${(p) =>
        p.visible
          ? "cubic-bezier(0.4, 0, 1, 1)"
          : "cubic-bezier(0, 0, 0.2, 1)"} !important;
  }
`;

function Navbar(props) {
  const [compact, setCompact] = useState(0);
  return (
    <>
      <Backdrop visible={props.visible} onClick={props.close} />
      <StyledNav compact={compact} {...props}>
        <Logo compact={compact} />
        <NavLinksGroup compact={compact} />
      </StyledNav>
    </>
  );
}

export default Navbar;
