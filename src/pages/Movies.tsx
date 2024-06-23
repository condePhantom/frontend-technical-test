import { FC, useEffect } from "react";
import BaseLayout from "../components/layout/BaseLayout";
import DisplayPrograms from "../components/organisms/DisplayPrograms";
import { SelectChangeEvent } from "@mui/material";
import { ProgramPaginatorProps } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setCurrentPage, setMoviesPerPage } from "../store/moviesSlice";
import { useNavigate } from "react-router-dom";

const Movies: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector(
    (state: RootState) => state.movies.currentPage
  );
  const moviesPerPage = useSelector(
    (state: RootState) => state.movies.moviesPerPage
  );
  const movies = useSelector((state: RootState) => state.movies.movies);

  useEffect(() => {
    if (!movies.length) {
      navigate("/");
    }
  }, [navigate, movies]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    dispatch(setCurrentPage(page));
  };

  const handleMoviesPerPageChange = (event: SelectChangeEvent) => {
    dispatch(setMoviesPerPage(event.target.value as unknown as number));
    dispatch(setCurrentPage(1));
  };
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const count = Math.ceil(movies.length / moviesPerPage);

  const paginator: ProgramPaginatorProps = {
    currentPage,
    programsPerPage: moviesPerPage,
    handleProgramsPerPageChange: handleMoviesPerPageChange,
    handlePageChange,
    count,
  };

  return (
    <BaseLayout title={"Popular Movies"}>
      <DisplayPrograms programs={currentMovies} paginator={paginator} />
    </BaseLayout>
  );
};

export default Movies;
