"use client";
import { ReactNode } from "react";
import { BaseButtonContained } from "./styled";
import { ButtonProps } from "@mui/material";
import { ButtonLoading } from "@/components/loading/button-loading";

type ButtonContainedProps = {
  children: ReactNode;
  loading?: boolean;
} & ButtonProps;

const ButtonContained = ({
  children,
  loading,
  ...props
}: ButtonContainedProps) => {
  return (
    <BaseButtonContained variant="contained" {...props}>
      {loading ? <ButtonLoading /> : children}
    </BaseButtonContained>
  );
};

export { ButtonContained };
