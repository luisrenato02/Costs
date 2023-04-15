import * as S from "./styles";
interface ActionButtonProps {
  label: string;
  onClick: () => void;
  icon: JSX.Element;
}
export const ActionButton = ({ label, icon, onClick }: ActionButtonProps) => {
  return (
    <S.Button onClick={() => onClick()}>
      <div>{icon}</div>
      <div>
        <label>{label}</label>
      </div>
    </S.Button>
  );
};
