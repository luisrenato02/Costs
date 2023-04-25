import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProject } from "../../../interfaces/Project";
import { ProjectForm } from "../../Organisms/ProjectForm";
import * as S from "./styles";
import { Loading } from "../../Atomos/Loading";
export const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setProject(data))
        .catch((err) => console.error(err));
    }, 500);
  }, [id]);

  return (
    <S.Container>
      {project ? (
        <>
          <h1>{project?.name}</h1>
          <ProjectForm projectData={project} handleSubmit={console.log("kk")} />
        </>
      ) : (
        <Loading />
      )}
    </S.Container>
  );
};
