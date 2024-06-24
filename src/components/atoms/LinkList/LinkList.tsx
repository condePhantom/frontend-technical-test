import { FC, Fragment } from "react";

import { Grid, Typography, Link } from "@mui/material";
import styles from "./LinkList.module.css";

export interface LinkListProps {
  items: {
    title: string;
    url: string;
  }[];
}

const LinkList: FC<LinkListProps> = ({ items = [] }) => {
  return (
    <Grid item xs={12} className={styles.links}>
      <Typography variant="body1">
        {items?.map(({ title, url }, i) => {
          return (
            <Fragment key={"link" + i}>
              <Link href={url}>{title}</Link>{" "}
              {i < items.length - 1 ? "|" : null}
            </Fragment>
          );
        })}
      </Typography>
    </Grid>
  );
};

export default LinkList;
