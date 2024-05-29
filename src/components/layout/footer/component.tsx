import { Box, Container, Typography } from "@mui/material";

import Link from "next/link";

const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        py: 1,
        px: 2,
        backgroundColor: "background.paper",
      }}
    >
      <Box
        textAlign="center"
        component="footer"
        display="flex"
        flexDirection="column"
        gap="15px"
        width="100%"
        maxWidth="800px"
        mx="auto"
      >
        <Typography>
          Desenvolvido por{" "}
          <Link
            target="_blank"
            href="https://marcelowesley.github.io/Badge-Dev-DoWhile/"
          >
            Marcelo Wesley
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export { Footer };
