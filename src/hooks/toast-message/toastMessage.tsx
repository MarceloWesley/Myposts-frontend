"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import { toast } from "react-toastify";

type ToastFProps = {
  message: string;
  type: "success" | "error" | "warning";
  position?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  autoClose?: number;
};

function useToastMessage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));

  const ToastF = ({
    message,
    type,
    position = "top-right",
    autoClose = 5000,
  }: ToastFProps) => {
    toast[type](message, {
      position,
      autoClose,
      style: {
        ...(isMobile
          ? {
              width: "280px",
              margin: "90px 5px 0 auto",
              borderRadius: "5px",
            }
          : {}),
      },
    });
  };

  return {
    ToastF,
  };
}

export { useToastMessage };
