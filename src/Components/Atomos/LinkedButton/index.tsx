import { Link } from "react-router-dom";
import * as S from "./styles";
interface ButtonProps {
  to: string;
  label: string;
}
export const LinkedButton = ({ to, label }: ButtonProps) => {
  return (
    <>
      <S.ContainerButton>
        <S.ContainerLink to={to}>{label}</S.ContainerLink>
      </S.ContainerButton>
    </>
  );
};
