import { FC, PropsWithChildren } from "react";
import { Container, Box } from "@mui/material";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header title="Popular Titles" />
      <Container fixed sx={{ maxWidth: "100%", minHeight: 550, mt: 3 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
export default BaseLayout;
