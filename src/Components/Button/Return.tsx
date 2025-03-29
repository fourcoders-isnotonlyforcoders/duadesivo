import { ButtonReturnContainer, ButtonReturnIcon } from "./styles";
import { ButtonReturnProps } from "./types";


export const ButtonReturn: React.FC<ButtonReturnProps> = ({ to }) => {
  return (
    <ButtonReturnContainer to={to}>
      <ButtonReturnIcon src="./icons/arrow-right.svg" />
    </ButtonReturnContainer>
  );
};
