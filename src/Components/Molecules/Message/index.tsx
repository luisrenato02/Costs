import * as S from "./styles";
import { useState, useEffect } from "react";
interface IMessage {
  type: string;
  message: string;
}
export const Message = ({ type, message }: IMessage) => {
  useEffect(() => {
    if (!message) {
      setShow(false);
    }

    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  const [show, setShow] = useState<boolean>(true);
  return (
    show && (
      <S.MessageDiv
        style={{
          backgroundColor:
            type === "sucess"
              ? "#78F57C"
              : type === "error"
              ? "#F0796B"
              : "#FFD285",
        }}
      >
        <p
          style={{
            color:
              type === "sucess"
                ? "#23AD00"
                : type === "error"
                ? "#E53E14"
                : "#F0AE24",
          }}
        >
          {message}
        </p>
      </S.MessageDiv>
    )
  );
};
