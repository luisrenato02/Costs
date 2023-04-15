import { ICategory } from "../../../interfaces/Project";
import { ActionButton } from "../../Atomos/ActionButton";
import { Plus, Edit } from "tabler-icons-react";
import * as S from "./styles";
interface CardProps {
  id: number;
  name: string;
  budget: number;
  category: ICategory;
  handleRemove: () => void;
}
export const Card = ({
  id,
  name,
  budget,
  category,
  handleRemove,
}: CardProps) => {
  return (
    // Criar um modal para Editar e o botão de deletar fazer uma função de post para deletar o item

    <S.ContainerCard>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <ul>
          <li>ID: {id}</li>
          <li>Orçamento: {budget}</li>
          <li>{category.name}</li>
        </ul>
      </div>

      <div style={{ display: "flex" }}>
        <ActionButton
          label={"Editar"}
          onClick={() => console.log("1")}
          icon={<Edit />}
        />
        <ActionButton
          label={"Excluir"}
          onClick={() => console.log("2")}
          icon={<Plus />}
        />
      </div>
    </S.ContainerCard>
  );
};
