import { SxProps, Theme, keyframes } from "@mui/material";
const bounce = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const loadingButtonStyles: SxProps<Theme> = {
  animation: `${bounce} 1s linear infinite`,
};

export { loadingButtonStyles };
