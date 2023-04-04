import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectForm } from "../../Molecules/ProjectForm";
import { Container } from "./styles";

export const NewProject = () => {
  const navigate = useNavigate();

  const createPost = (project) => {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json)
      .then((data) => {
        console.log(data);
        navigate("/home");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} />
    </Container>
  );
};
