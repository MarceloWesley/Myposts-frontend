"use client";
import { MobileNavigation } from "@/components/mobile-navigation";
import { useMediaQuery, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));

  return isMobile ? <MobileNavigation /> : "";
};

export { Footer };
