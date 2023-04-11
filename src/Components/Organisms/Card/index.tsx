import * as S from "/styles.ts";
interface CardProps {
  id: number;
  name: string;
  budget: number;
  category: string;
  handleRemove: () => void;
}
export const Card = ({
  id,
  name,
  budget,
  category,
  handleRemove,
}: CardProps) => {
  return <p></p>;
};
