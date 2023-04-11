import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerButton = styled.div`
  width: auto;
  height: 40px;
  background-color: #222;
  padding: 10px;
`;

export const ContainerLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  :hover {
    color: #ffbb33;
  }
`;
