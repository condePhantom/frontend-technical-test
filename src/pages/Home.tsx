import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchMovies } from "../store/moviesSlice";
import { fetchSeries } from "../store/seriesSlice";
import BaseLayout from "../components/layout/BaseLayout";
import HomeCategories from "../components/organisms/HomeCategories/HomeCategories";
import Loader from "../components/atoms/Loader/Loader";

const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const statusMovies = useSelector((state: RootState) => state.movies.status);
  const statusSeries = useSelector((state: RootState) => state.series.status);

  //const errorMovies = useSelector((state: RootState) => state.movies.error);
  //const errorSeries = useSelector((state: RootState) => state.series.error);

  useEffect(() => {
    if (statusMovies === "idle") {
      dispatch(fetchMovies());
    }
    if (statusSeries === "idle") {
      dispatch(fetchSeries());
    }
  }, [statusMovies, statusSeries, dispatch]);

  let content;
  if (statusMovies === "loading" || statusSeries === "loading") {
    content = <Loader message="Loading..." />;
  } else if (statusMovies === "succeeded" && statusSeries === "succeeded") {
    content = <HomeCategories />;
  } else if (statusMovies === "failed" || statusSeries === "failed") {
    content = (
      <Box>
        <Typography variant="h6" style={{ marginTop: 16 }}>
          Oops, something went wrong... :(
        </Typography>
        {/*errorMovies + " " + errorSeries*/}
      </Box>
    );
  }

  return <BaseLayout title={"Popular Titles"}>{content}</BaseLayout>;
};

export default Home;
