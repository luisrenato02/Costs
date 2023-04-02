import * as S from "./styles";

type SelectProps = {
  text: string;
  name: string;
  options: string;
  handleOnChange?: () => void;
  value?: string;
};

export const Select = ({ text, name, handleOnChange, value }: SelectProps) => {
  return (
    <S.FormControl>
      <S.Label htmlFor={name}>{text}</S.Label>
      <S.Select name={name} onChange={handleOnChange} value={value}>
        <option>Selecione uma opção</option>
      </S.Select>
    </S.FormControl>
  );
};
