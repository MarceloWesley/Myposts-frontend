import { ReactNode } from "react";
import { BaseButtonGhost } from "./styled";

type ButtonGhostProps = {
  children: ReactNode;
};

const ButtonGhost = ({ children, ...props }: ButtonGhostProps) => {
  return (
    <BaseButtonGhost variant="outlined" {...props}>
      {children}
    </BaseButtonGhost>
  );
};

export { ButtonGhost };
