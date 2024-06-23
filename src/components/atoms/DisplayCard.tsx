import { FC, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./DisplayCard.module.css";
import { Link } from "react-router-dom";
import noImage from "../../assets/no-image.jpg";

interface DisplayCardProps {
  image: string;
  label?: string;
  title: string;
  url?: string;
  onClick?: () => void;
}

const CategoryCard: FC<DisplayCardProps> = ({
  image,
  label,
  title,
  url,
  onClick,
}) => {
  const [imgSrc, setImgSrc] = useState(image);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImgSrc(image);
    img.onerror = () => setImgSrc(noImage);
  });
  return (
    <Box
      className={styles.card}
      sx={{ backgroundColor: url ? "rgb(30, 30, 30)" : "transparent" }}
      onClick={onClick}
    >
      <Link
        to={url || ""}
        className=""
        style={{ textDecoration: "none", color: "white" }}
      >
        <Box
          className={styles.imageContainer}
          sx={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: url ? "auto" : "cover",
            ...(!url && {
              "&:hover": {
                opacity: "0.4",
                border: "1px solid white",
              },
            }),
          }}
        >
          {label && (
            <Typography variant="h4" className={styles.label}>
              {label}
            </Typography>
          )}
        </Box>
        <Typography variant="subtitle1" color="black" bgcolor="white">
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default CategoryCard;
