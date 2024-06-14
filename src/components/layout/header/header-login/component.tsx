"use client";

import { AppBar, Container, Toolbar } from "@mui/material";

import { Logo } from "../logo";

const HeaderLogin = () => {
  return (
    <>
      <AppBar
        sx={{
          "&": {
            backgroundColor: "background.paper",
            backgroundImage: "none",
          },
        }}
      >
        <Container maxWidth="desktop">
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo
            //   width={isMobile ? "40px" : "60px"}
            //   height={isMobile ? "40px" : "60px"}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export { HeaderLogin };
