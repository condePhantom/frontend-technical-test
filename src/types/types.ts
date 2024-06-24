import { SelectChangeEvent } from "@mui/material";
export interface Program {
  title: string;
  description: string;
  programType: "series" | "movie" | string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    }
  },
  releaseYear: number
}

export interface ProgramPaginatorProps {
  currentPage: number;
  programsPerPage: number;
  count: number;
  handlePageChange : (event: React.ChangeEvent<unknown>, page: number) => void;
  handleProgramsPerPageChange: ( event: SelectChangeEvent) => void
}