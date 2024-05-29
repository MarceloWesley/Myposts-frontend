"use client";

import { Box, BoxProps } from "@mui/material";

type LogoProps = BoxProps;

const Logo = ({ ...props }: LogoProps) => {
  return (
    <Box position="relative" display="block" {...props}>
      <h2>MyPosts</h2>
    </Box>
  );
};

export { Logo };
