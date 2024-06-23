import { FC, useEffect } from "react";
import BaseLayout from "../components/layout/BaseLayout";
import DisplayPrograms from "../components/organisms/DisplayPrograms";
import { SelectChangeEvent } from "@mui/material";
import { ProgramPaginatorProps } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setCurrentPage, setSeriesPerPage } from "../store/seriesSlice";
import { useNavigate } from "react-router-dom";

const Series: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const series = useSelector((state: RootState) => state.series.series);
  const currentPage = useSelector(
    (state: RootState) => state.series.currentPage
  );

  useEffect(() => {
    if (!series.length) {
      navigate("/");
    }
  }, [navigate, series]);

  const seriesPerPage = useSelector(
    (state: RootState) => state.series.seriesPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    dispatch(setCurrentPage(page));
  };

  const handleSeriesPerPageChange = (event: SelectChangeEvent) => {
    dispatch(setSeriesPerPage(event.target.value as unknown as number));
    dispatch(setCurrentPage(1));
  };
  const indexOfLastMovie = currentPage * seriesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - seriesPerPage;
  const currentSeries = series.slice(indexOfFirstMovie, indexOfLastMovie);
  const count = Math.ceil(series.length / seriesPerPage);

  const paginator: ProgramPaginatorProps = {
    currentPage,
    programsPerPage: seriesPerPage,
    handleProgramsPerPageChange: handleSeriesPerPageChange,
    handlePageChange,
    count,
  };

  return (
    <BaseLayout title={"Popular Series"}>
      <DisplayPrograms programs={currentSeries} paginator={paginator} />
    </BaseLayout>
  );
};

export default Series;
