import { Message } from "../../Molecules/Message";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { LinkedButton } from "../../Atomos/LinkedButton";
import { Card } from "../../Organisms/Card";
import { useEffect, useState } from "react";
import { IProject } from "../../../interfaces/Project";
import { Loading } from "../../Atomos/Loading";

export const Projects = () => {
  const location = useLocation();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [message, setMessage] = useState<string>("");
  const [removeloading, setRemoveLoading] = useState(false);

  if (location.state) {
    setMessage(location.state.message);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.error(err));
    }, 500);
  }, []);

  const removeProject = (id: number) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <S.Container>
        <h1>Meus Projetos</h1>
        <LinkedButton label="Novo Projeto" to="/newproject" />
      </S.Container>
      {message && <Message type="success" message={message} />}
      <S.ContainerProjects>
        {projects.length > 0 &&
          projects.map((project, index) => (
            <Card
              key={index}
              id={project.id}
              name={project.name}
              budget={0}
              category={project.category ?? { id: null, name: "" }}
              handleRemove={() => removeProject(project.id)}
            />
          ))}
      </S.ContainerProjects>
      {!removeloading && <Loading />}
    </div>
  );
};
