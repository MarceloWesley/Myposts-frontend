// styles

import { Tabs, styled } from "@mui/material";

const TabsRoot = styled(Tabs)(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    maxWidth: "260px",
  },
  [theme.breakpoints.down("tablet")]: {
    width: "260px",
  },
  minWidth: "100%",
}));

export { TabsRoot };
