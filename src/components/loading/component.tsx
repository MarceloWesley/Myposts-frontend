import { Box } from "@mui/material";
import { CircleNotch } from "@phosphor-icons/react";
import { loadingButtonStyles } from "./button-loading/style";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      borderRadius="100%"
      component="div"
      sx={loadingButtonStyles}
    >
      <CircleNotch size={40} />
    </Box>
  );
};

export { Loading };
