import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 3em;
  text-align: center;
  height: 20vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  ul {
    display: flex;
    justify-content: center;
  }
  li {
    list-style: none;
    margin: 0 1em;
  }
  li:hover {
    color: #ffbb33;
    cursor: pointer;
    font-size: 1.5;
  }

  p {
    margin-top: 2em;
  }
  span {
    font-weight: bold;
    color: #ffbb33;
  }
`;
