import * as S from "./styles";

interface Ioptions {
  id: number;
  name: string;
}

type SelectProps = {
  text: string;
  name: string;
  options: Ioptions[];
  handleOnChange?: () => void;
  value?: string;
};

export const Select = ({
  text,
  name,
  handleOnChange,
  value,
  options,
}: SelectProps) => {
  return (
    <S.FormControl>
      <S.Label htmlFor={name}>{text}</S.Label>
      <S.Select name={name} onChange={handleOnChange} value={value}>
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </S.Select>
    </S.FormControl>
  );
};
