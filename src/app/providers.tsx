"use client";

import { ReactNode } from "react";

import { CssBaseline, ScopedCssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "@/layout/theme";
import { UserProvider } from "@/context/session";

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <CssBaseline />

          <ScopedCssBaseline>{children}</ScopedCssBaseline>
        </UserProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export { AppProviders };
