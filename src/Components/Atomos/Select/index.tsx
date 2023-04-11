import { ISelectProps, Ioption } from "../../../interfaces/Select";
import * as S from "./styles";

export const Select = ({
  text,
  name,
  handleOnChange,
  value,
  options,
}: ISelectProps) => {
  return (
    <S.FormControl>
      <S.Label htmlFor={name}>{text}</S.Label>
      <S.Select name={name} onChange={handleOnChange} value={value}>
        <option>Selecione uma opção</option>
        {options.map((option: Ioption) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </S.Select>
    </S.FormControl>
  );
};
