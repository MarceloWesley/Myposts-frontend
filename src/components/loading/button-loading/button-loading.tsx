import { Box } from "@mui/material";
import { CircleNotch } from "@phosphor-icons/react";
import { loadingButtonStyles } from "./style";

const ButtonLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      borderRadius="100%"
      component="div"
      sx={loadingButtonStyles}
    >
      <CircleNotch size={30} />
    </Box>
  );
};

export { ButtonLoading };
