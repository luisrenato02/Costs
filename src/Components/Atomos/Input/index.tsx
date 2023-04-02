import * as S from "./styles";

type InputProps = {
  type: string;
  text: string;
  name: string;
  placeholder: string;
  handleOnChange?: () => void;
  value?: string;
};

export const Input = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}: InputProps) => {
  return (
    <S.FormControl>
      <S.Label htmlFor={name}>{text}</S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      ></S.Input>
    </S.FormControl>
  );
};
