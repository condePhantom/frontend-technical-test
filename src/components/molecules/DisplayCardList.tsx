import { FC } from "react";
import { Box } from "@mui/material";
import DisplayCard from "../atoms/DisplayCard";
import { Program } from "../../types/types";

interface DisplayCardProps {
  programs: Program[];
}

const DisplayCardList: FC<DisplayCardProps> = ({ programs }) => {
  return (
    <>
      {programs?.map((prgm) => (
        <Box display={"flex"}>
          <DisplayCard {...prgm} image={prgm?.images["Poster Art"].url} />
        </Box>
      ))}
    </>
  );
};

export default DisplayCardList;
