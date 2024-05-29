import { theme } from "@/layout/theme";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <Box component="span" color={theme.palette.error.main} fontSize="0.75rem">
      {children}
    </Box>
  );
};

export { ErrorMessage };
