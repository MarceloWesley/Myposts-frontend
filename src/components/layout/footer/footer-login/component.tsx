"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

const FooterLogin = () => {
  return (
    <>
      <Box
        width="100%"
        textAlign="center"
        position="fixed"
        bottom="0"
        zIndex="9999"
      >
        <Typography>
          Desenvolvido por{" "}
          <Link
            target="_blank"
            color="blue"
            href="https://marcelowesley.github.io/Badge-Dev-DoWhile/"
          >
            Marcelo Wesley
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export { FooterLogin };
