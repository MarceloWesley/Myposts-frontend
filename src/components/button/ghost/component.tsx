import { ReactNode } from "react";
import { BaseButtonGhost } from "./styled";
import { ButtonLoading } from "@/components/loading/button-loading";
import { ButtonProps } from "@mui/material";

type ButtonGhostProps = {
  children: ReactNode;
  loading?: boolean;
} & ButtonProps;

const ButtonGhost = ({ children, loading, ...props }: ButtonGhostProps) => {
  return (
    <BaseButtonGhost variant="outlined" {...props}>
      {loading ? <ButtonLoading /> : children}
    </BaseButtonGhost>
  );
};

export { ButtonGhost };
