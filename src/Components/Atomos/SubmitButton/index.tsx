import * as S from "./styles";

type text = {
  text: string;
};
export const SubmitButton = ({ text }: text) => {
  return (
    <div>
      <S.SubmitButton>{text}</S.SubmitButton>
    </div>
  );
};
