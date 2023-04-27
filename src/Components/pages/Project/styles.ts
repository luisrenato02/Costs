import styled from "styled-components";

export const Container = styled.div`
  place-content: center;

  margin: 0 auto;
  padding: 3em;

  h1 {
    margin-bottom: 0.5em;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  h2 {
    background-color: #222;
    color: #ffbb33;
    padding: 0.5em;
    width: 50%;
  }
  div {
    margin-right: 50px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0.5em;

  span {
    font-weight: bold;
  }
`;

export const Services = styled.div`
  margin-bottom: 1.2em;
  padding-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;

  h2 {
    background-color: #222;
    color: #ffbb33;
    padding: 0.5em;
    width: 50%;
  }
  div {
    margin-right: 50px;
  }
`;
