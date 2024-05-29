import { Content } from "@/components/layout/content";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Box } from "@mui/material";

export function Layout({
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
