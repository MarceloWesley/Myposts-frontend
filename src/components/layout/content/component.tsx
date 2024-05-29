import { ReactNode } from "react";

import { Box, Toolbar } from "@mui/material";

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return (
    <Box
      component="main"
      sx={{ backgroundColor: "background.default" }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Toolbar />

      <Box display="flex" flexDirection="column" flexGrow={1}>
        {children}
      </Box>
    </Box>
  );
};

export { Content };
