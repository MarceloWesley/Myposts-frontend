import { Box, BoxProps, styled } from "@mui/material";

const BaseCommentHeader = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export { BaseCommentHeader };
