import { Stack, StackProps, styled } from "@mui/material";

const BasePostRoot = styled(Stack)<StackProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  padding: theme.spacing(1),
  gap: theme.spacing(2),
}));

export { BasePostRoot };
