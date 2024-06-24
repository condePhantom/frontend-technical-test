import { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import facebookIcon from "../../../assets/social/facebook-white.svg";
import instagramIcon from "../../../assets/social/instagram-white.svg";
import twitterIcon from "../../../assets/social/twitter-white.svg";
import appStoreIcon from "../../../assets/store/app-store.svg";
import googlePlayIcon from "../../../assets/store/play-store.svg";
import microsoftStoreIcon from "../../../assets/store/windows-store.svg";
import styles from "./Footer.module.css";
import LinkList from "../../atoms/LinkList/LinkList";
import { footerLinks } from "../../../constants/constants";
import IconsStack from "../../atoms/IconsStack/IconsStack";

//NOTE: This could be updated to a complex object to handle social media or store urls
const socialIcons = [facebookIcon, twitterIcon, instagramIcon];
const storeIcons = [appStoreIcon, googlePlayIcon, microsoftStoreIcon];
const Footer: FC = () => {
  return (
    <footer>
      <Box
        className={styles.footer}
        sx={{
          left: { md: 0 },
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="left"
          sx={{ py: { xs: 1, md: 3 }, px: { xs: 6, md: 8 } }}
        >
          <LinkList items={footerLinks} />
          <Typography variant="body2" sx={{ mt: 1, ml: 1 }}>
            Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} px={8} py={3}>
          <Grid container spacing={2}>
            <IconsStack imagesSrc={socialIcons} width="30px" height="30px" />
            <IconsStack imagesSrc={storeIcons} width="120px" height="40px" />
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
