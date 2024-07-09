"use client";

import { Box, BoxProps } from "@mui/material";
import { useRouter } from "next/navigation";

type LogoProps = BoxProps;

const Logo = ({ ...props }: LogoProps) => {
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push("/home")}
      position="relative"
      display="block"
      sx={{ cursor: "pointer" }}
      {...props}
    >
      <h2>MyPosts</h2>
    </Box>
  );
};

export { Logo };
