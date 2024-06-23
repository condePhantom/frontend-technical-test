import { FC } from "react";
import { Box } from "@mui/material";
import DisplayCardList from "../molecules/DisplayCardList";
import { Program } from "../../types/types";

interface DisplayProgramsProps {
  programs: Program[];
}

const DisplayPrograms: FC<DisplayProgramsProps> = ({ programs }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      sx={{ justifyContent: { xs: "center", md: "space-between" } }}
    >
      <DisplayCardList programs={programs} />
    </Box>
  );
};

export default DisplayPrograms;
