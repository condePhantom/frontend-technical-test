import { FC } from "react";
import { Box } from "@mui/material";
import DisplayCard from "../../atoms/DisplayCard/DisplayCard";
import placeholder from "../../../assets/placeholder.png";

export interface CategoriesListProps {
  categories: {
    label: string;
    title: string;
    url: string;
  }[];
}

const CategoriesList: FC<CategoriesListProps> = ({ categories }) => {
  return (
    <>
      {categories?.map((category, i) => (
        <Box display={"flex"} key={"category-" + i}>
          <DisplayCard {...category} image={placeholder} />
        </Box>
      ))}
    </>
  );
};

export default CategoriesList;
