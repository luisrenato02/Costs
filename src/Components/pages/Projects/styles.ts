import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 3em;
  display: flex;
  justify-content: space-between;
  h1 {
    margin-bottom: 0.5em;
  }

  p {
    color: #7b7b7b;
  }
`;

export const ContainerProjects = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;
  padding: 2em;
  width: 100%;

`;
