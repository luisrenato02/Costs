import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.6em;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.7em;
  border-radius: 0;
  border: none;

  input::placeholder {
    color: #7b7b7b;
  }
`;
