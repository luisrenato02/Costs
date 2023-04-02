import { Input } from "../../Atomos/Input";
import { Select } from "../../Atomos/Select";
import { SubmitButton } from "../../Atomos/SubmitButton";
import { FormContainer } from "./styles";

export const ProjectForm = () => {
  return (
    <FormContainer>
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
      <Select text={"Selecione a categoria"} name="category_id" options={""} />
      <SubmitButton text="Criar projeto" />
    </FormContainer>
  );
};
