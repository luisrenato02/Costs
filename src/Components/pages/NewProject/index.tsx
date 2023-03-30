import React from "react";
import { ProjectForm } from "../../Molecules/ProjectForm";
import { Container } from "./styles";

export const NewProject = () => {
  return (
    <Container>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </Container>
  );
};
