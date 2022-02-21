import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: fit-content;

  background-color: var(--header-bg);
  color: var(--default-bg);
  padding: var(--spacing-sm);
`;

export default FooterStyle;
