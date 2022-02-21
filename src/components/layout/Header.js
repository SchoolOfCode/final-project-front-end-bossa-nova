import styled from "styled-components";
import { breakpoints as bp } from "../../GlobalStyle";

import { Button } from "../../ui";

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  height: 48px;
  align-items: stretch;
  padding: 0 24px;
  > div {
    display: flex;
    align-items: center;
  }
  button {
    white-space: nowrap;
  }
  &:first-child {
    font-size: var(--fsize-6);
    i {
      display: none;
      @media (max-width: ${bp.desktop}) {
        display: inline;
      }
    }
  }
`;

function Header({ toggle }) {
  return (
    <Grid>
      <div onClick={toggle}>
        <Button>menu</Button>
      </div>
      <div className="mid"></div>
      <div>
        <Button>Sign Out</Button>
      </div>
    </Grid>
  );
}

export default Header;

{
  /* <FaUserCircle
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      /> */
}
// import { FaUserCircle } from "react-icons/fa";