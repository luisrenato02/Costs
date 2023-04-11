import { useHistory } from "react-router-dom";
import { ProjectForm } from "../../Organisms/ProjectForm";
import { Container } from "./styles";
import { IProject } from "../../../interfaces/Project";

export const NewProject = () => {
  const navigate = useHistory();

  const createPost = (project: IProject) => {
    project.budget = 0;
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
        navigate.push("/projects", { message: "Projeto criado com sucesso!" });
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
