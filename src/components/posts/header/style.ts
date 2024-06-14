import { Box, BoxProps, styled } from "@mui/material";

const BasePostHeader = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export { BasePostHeader };
