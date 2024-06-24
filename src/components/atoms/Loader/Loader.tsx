import { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export interface LoaderProps {
  message: string;
}
const Loader: FC<LoaderProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <CircularProgress />
      <Typography variant="h6" style={{ marginTop: 16 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
