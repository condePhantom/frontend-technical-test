import { FC, useState } from "react";
import { Box } from "@mui/material";
import DisplayCardList from "../molecules/DisplayCardList";
import ProgramModal from "../molecules/ProgramModal";
import { Program } from "../../types/types";

interface DisplayProgramsProps {
  programs: Program[];
}

const DisplayPrograms: FC<DisplayProgramsProps> = ({ programs }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Program>();

  const handleOpen = (prog: Program) => {
    setSelected(prog);
    setOpen(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      sx={{ justifyContent: { xs: "center", md: "space-between" } }}
    >
      <DisplayCardList programs={programs} onClick={handleOpen} />
      {selected && (
        <ProgramModal
          program={selected}
          open={open}
          onClose={() => {
            setOpen(false);
            setSelected(undefined);
          }}
        />
      )}
    </Box>
  );
};

export default DisplayPrograms;
