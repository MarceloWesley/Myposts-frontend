import type { Metadata } from "next";

import { Box } from "@mui/material";
import { Content } from "@/components/layout/content";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Content>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          flexGrow={1}
          p={4}
        >
          {children}
        </Box>
        <Footer />
      </Content>
    </>
  );
}