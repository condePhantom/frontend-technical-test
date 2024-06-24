import { FC } from "react";
import { Toolbar, AppBar, Typography } from "@mui/material";

export interface TitleHeaderProps {
  title: string;
}
const TitleHeader: FC<TitleHeaderProps> = ({ title }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgb(65, 65, 65)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          mx: { xs: 1, md: 8 },
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TitleHeader;
