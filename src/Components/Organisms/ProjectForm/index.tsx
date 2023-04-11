import { useState, useEffect } from "react";
import { Input } from "../../Atomos/Input";
import { Select } from "../../Atomos/Select";
import { SubmitButton } from "../../Atomos/SubmitButton";
import { FormContainer } from "./styles";
import { ICategory, IProject } from "../../../interfaces/Project";

interface IProjectForm {
  handleSubmit: (project: IProject) => true;
  projectData: IProject;
}

export const ProjectForm = ({ handleSubmit, projectData }: IProjectForm) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState<IProject>(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const submit = (e: any) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChangeName = (value: number) => {
    setProject({ ...project, name: value.target.value });
  };
  const handleChangeCost = (value: number) => {
    setProject({ ...project, budget: value.target.value });
  };
  const handleCategory = (value: ICategory) => {
    setProject({
      ...project,
      category: {
        id: value.target.value,
        name: value.target.options[value.target.selectedIndex].text,
      },
    });

    console.log(project);
  };

  return (
    <FormContainer onSubmit={submit}>
      <Input
        text="Nome do projeto"
        type="text"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={(e: string | number) => handleChangeName(e)}
        value={project.name ?? ""}
      />
      <Input
        text="Orçamento do projeto"
        type="number"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={(e: string | number) => handleChangeCost(e)}
        value={project.budget ?? 0}
      />
      <Select
        text={"Selecione a categoria"}
        name="category_id"
        options={categories}
        handleOnChange={(e: ICategory) => handleCategory(e)}
        value={project.category?.id ?? 0}
      />
      <SubmitButton text="Criar projeto" />
    </FormContainer>
  );
};
