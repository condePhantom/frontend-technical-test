import { FC } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./DisplayCard.module.css";
import { Link } from "react-router-dom";

interface DisplayCardProps {
  image: string;
  label: string;
  title: string;
  url: string;
}

const CategoryCard: FC<DisplayCardProps> = ({ image, label, title, url }) => {
  return (
    <Box className={styles.card}>
      <Link
        to={"/"}
        className=""
        style={{ textDecoration: "none", color: "white" }}
      >
        <Box
          className={styles.imageContainer}
          sx={{ backgroundImage: `url(${image})` }}
        >
          <Typography variant="h4" className={styles.label}>
            {label}
          </Typography>
        </Box>
        <Typography variant="subtitle1">{title}</Typography>
      </Link>
    </Box>
  );
};

export default CategoryCard;
