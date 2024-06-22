import { FC } from "react";
import { Box } from "@mui/material";
import DisplayCard from "../atoms/DisplayCard";
import placeholder from "../../assets/placeholder.png";

interface CategoriesListProps {
  categories: {
    label: string;
    title: string;
    url: string;
  }[];
}

const CategoriesList: FC<CategoriesListProps> = ({ categories }) => {
  return (
    <>
      {categories?.map((category) => (
        <Box display={"flex"}>
          <DisplayCard {...category} image={placeholder} />
        </Box>
      ))}
    </>
  );
};

export default CategoriesList;
