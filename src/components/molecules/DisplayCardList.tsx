import { FC } from "react";
import { Box } from "@mui/material";
import DisplayCard from "../atoms/DisplayCard/DisplayCard";
import { Program } from "../../types/types";

interface DisplayCardListProps {
  programs: Program[];
  onClick: (prog: Program) => void;
}

const DisplayCardList: FC<DisplayCardListProps> = ({ programs, onClick }) => {
  return (
    <>
      {programs?.map((prog, i) => (
        <Box display={"flex"} key={"displayCard" + i}>
          <DisplayCard
            {...prog}
            image={prog?.images["Poster Art"].url}
            onClick={() => onClick(prog)}
          />
        </Box>
      ))}
    </>
  );
};

export default DisplayCardList;
