import { FC, PropsWithChildren } from "react";
import { Container, Box } from "@mui/material";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer/Footer";

interface BaseLayoutProps {
  title: string;
}

const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header title={title} />
      <Container fixed sx={{ maxWidth: "100%", minHeight: 550, mt: 3 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
export default BaseLayout;
