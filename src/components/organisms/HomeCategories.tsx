import { FC } from "react";
import { Box } from "@mui/material";
import CategoriesList from "../molecules/CategoriesList/CategoriesList";
import { categories } from "../../constants/constants";

const HomeCategories: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
    >
      <CategoriesList categories={categories} />
    </Box>
  );
};

export default HomeCategories;
