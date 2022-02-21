import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Grid = styled.div`
  display: grid;
  grid:
    "nav header" min-content
    "nav main" 1fr / min-content 1fr;
  min-height: 100vh;
`;

const GridNav = styled.div`
  grid-area: nav;
  grid-area: 2 / 2 / auto / span 3;
`;

const GridHeader = styled.header`
  grid-area: header;
  z-index: 1000;
`;

const GridMain = styled.main`
  grid-area: main;
`;

function Layout({ children, ...rest }) {
  const [showNav, setShowNav] = useState(0);
  const toggle = () => setShowNav(Number(!showNav));
  return (
    <Grid {...rest}>
      <GridNav>
        <Navbar visible={showNav} close={toggle} />
      </GridNav>
      <GridHeader>
        <Header toggle={toggle} />
      </GridHeader>
      <Footer />
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;
