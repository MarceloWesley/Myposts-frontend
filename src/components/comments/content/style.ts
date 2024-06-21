import { Box, BoxProps, styled } from "@mui/material";

const BaseCommentContent = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export { BaseCommentContent };
