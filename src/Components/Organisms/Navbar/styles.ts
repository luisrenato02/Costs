import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  margin: 0 0;
  padding: 1em;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
  li > a {
    margin-right: 1em;
    text-decoration: none;
    color: #fff;
  }

  li > a:hover {
    color: #ffbb33;
  }
`;

// export const NavItem = styled.
