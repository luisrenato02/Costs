import { ICategory } from "../../../interfaces/Project";
import { ActionButton } from "../../Atomos/ActionButton";
import { Plus, Edit } from "tabler-icons-react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
interface CardProps {
  id: number;
  name: string;
  budget: number;
  category: ICategory;
  handleRemove: (id: number) => void;
}
export const Card = ({
  id,
  name,
  budget,
  category,
  handleRemove,
}: CardProps) => {
  const navigate = useNavigate();
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
          <li>
            <S.Category>
              <S.Circle
                style={{
                  backgroundColor:
                    id === 1
                      ? "lime"
                      : id === 2
                      ? "red"
                      : id === 3
                      ? "pink"
                      : "blue",
                }}
              />
              {category.name}
            </S.Category>
          </li>
        </ul>
      </div>

      <div style={{ display: "flex" }}>
        <ActionButton
          label={"Editar"}
          onClick={() => navigate(`/projects/${id}`)}
          icon={<Edit />}
        />
        <ActionButton
          label={"Excluir"}
          onClick={() => handleRemove(id)}
          icon={<Plus />}
        />
      </div>
    </S.ContainerCard>
  );
};
