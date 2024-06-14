import { Box, BoxProps, styled } from "@mui/material";

const BasePostContent = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export { BasePostContent };
