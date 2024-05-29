import { ReactNode } from "react";
import { BaseButtonText } from "./styled";

type ButtonTextProps = {
  children: ReactNode;
};

const ButtonText = ({ children, ...props }: ButtonTextProps) => {
  return (
    <BaseButtonText variant="text" {...props}>
      {children}
    </BaseButtonText>
  );
};

export { ButtonText };
