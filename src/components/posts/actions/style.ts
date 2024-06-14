import { Box, BoxProps, styled } from "@mui/material";

const BasePostAction = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export { BasePostAction };
