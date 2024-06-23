import { FC } from "react";
import {
  Box,
  Pagination,
  Stack,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { ProgramPaginatorProps } from "../../types/types";

const ProgramPaginator: FC<ProgramPaginatorProps> = ({
  programsPerPage,
  handleProgramsPerPageChange,
  currentPage,
  handlePageChange,
  count,
}) => {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
      justifyContent={"center"}
      alignItems={"center"}
      marginY={2}
    >
      <FormControl variant="standard" margin="normal">
        <Select
          id="program-page"
          value={programsPerPage + ""}
          onChange={handleProgramsPerPageChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <Stack spacing={2} sx={{ mt: { xs: 2, mb: "auto" } }}>
        <Pagination
          count={count}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </Box>
  );
};

export default ProgramPaginator;
