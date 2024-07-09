import { ReactNode } from "react";

import { Box } from "@mui/material";

type TabPanelProps = {
  index: number;
  value: number;
  id: string;
  children?: ReactNode;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, id, ...other } = props;

  return (
    <Box
      //   display="flex"
      //   flexDirection="column"
      //   gap={3}
      marginTop={2}
      role="tabpanel"
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
};

export { TabPanel };
