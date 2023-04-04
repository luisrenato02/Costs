import { useState, useEffect } from "react";
import { Input } from "../../Atomos/Input";
import { Select } from "../../Atomos/Select";
import { SubmitButton } from "../../Atomos/SubmitButton";
import { FormContainer } from "./styles";

interface IProjectForm {
  handleSubmit: () => void;
  projectData: string;
}

export const ProjectForm = ({ handleSubmit, projectData }: IProjectForm) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

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

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer onSubmit={submit}>
      <Input
        text="Nome do projeto"
        type="text"
        name="name"
        placeholder="Insira o nome do projeto"
        value={"kk"}
        handleOnChange={() => console.log("kkk")}
      />
      <Input
        text="Orçamento do projeto"
        type="number"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select
        text={"Selecione a categoria"}
        name="category_id"
        options={categories}
      />
      <SubmitButton text="Criar projeto" />
    </FormContainer>
  );
};
