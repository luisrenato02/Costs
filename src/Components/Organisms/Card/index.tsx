import { ICategory } from "../../../interfaces/Project";
import * as S from "./styles.ts";
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
    </S.ContainerCard>
  );
};
