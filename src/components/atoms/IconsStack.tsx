import { FC } from "react";
import { Link, Grid } from "@mui/material";

interface IconsStackProps {
  imagesSrc: string[];
  height: string;
  width: string;
}

const IconsStack: FC<IconsStackProps> = ({ imagesSrc = [], height, width }) => {
  return (
    <Grid item xs={12} sm={6} p={2}>
      <Grid item sx={{ display: "flex" }}>
        <Grid container sx={{ justifyContent: { xs: "center", md: "left" } }}>
          {imagesSrc?.map((image, i) => (
            <Grid item my={{ xs: 1, md: 0 }} key={"Icon-" + i}>
              <Link href="#">
                <img
                  src={image}
                  alt="Facebook"
                  style={{ margin: "0 10px", width: width, height: height }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IconsStack;
