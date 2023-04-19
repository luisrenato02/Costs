import loading from "../../../public/loading.svg";
import { ContainerLoading } from "./styles";
export const Loading = () => {
  return (
    <ContainerLoading>
      <img src={loading} alt="Loading" />
    </ContainerLoading>
  );
};
