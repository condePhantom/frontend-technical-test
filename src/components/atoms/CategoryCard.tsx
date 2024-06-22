import { FC } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  image: string;
  label: string;
  title: string;
  url: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ image, label, title, url }) => {
  return (
    <Box className={styles.card}>
      <Link to={url} className={styles.title}>
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
