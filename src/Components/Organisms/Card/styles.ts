import styled from "styled-components";

export const ContainerCard = styled.div`
  padding: 1em;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  width: 100%;
  margin: 0.5%;
  align-content: center;

  h3 {
    background-color: #222;
    color: #ffbb33;
    padding: 0.4em;
    margin-bottom: 1.3em;
  }
  ul {
    list-style: none;
    li {
      text-align: start;
      font-weight: bold;
    }
  }
`;
export const Category = styled.div`
  display: flex;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 1px solid gray;
  margin: 7px 5px 0 0;
`;
