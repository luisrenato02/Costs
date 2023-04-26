import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProject } from "../../../interfaces/Project";
import { ProjectForm } from "../../Organisms/ProjectForm";
import * as S from "./styles";
import { Loading } from "../../Atomos/Loading";
import { ActionButton } from "../../Atomos/ActionButton";
import { Message } from "../../Molecules/Message";
export const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState<IProject>();
  const [openEdit, setOpenEdit] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<string>("");

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

  const editPost = (project: IProject) => {
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo");
      setType("error");
    } else {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(project),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
          setOpenEdit(false);
          setMessage("Projeto editado com sucesso!");
          setType("success");
        })
        .catch((err) => {
          console.error(err);
          setMessage("Erro ao enviar edição!");
          setType("error");
        });
    }
  };

  return (
    <>
      {message && <Message message={message} type={type} />}
      <S.ProjectInfo>
        <h2>{project?.name}</h2>
        <ActionButton
          label={openEdit ? "Voltar" : "Editar"}
          onClick={() => setOpenEdit(!openEdit)}
        />
      </S.ProjectInfo>
      {!openEdit ? (
        <div>
          <S.Ul>
            <li>
              <span>Categoria:</span>
              {project?.category.name}
            </li>
            <li>
              <span>Total de Orçamento:</span>
              {project?.budget}
            </li>
            <li>
              <span>Total Utilizado:</span>
              {project?.cost}
            </li>
          </S.Ul>
        </div>
      ) : (
        <S.Container>
          {project ? (
            <ProjectForm projectData={project} handleSubmit={editPost} />
          ) : (
            <Loading />
          )}
        </S.Container>
      )}
    </>
  );
};
