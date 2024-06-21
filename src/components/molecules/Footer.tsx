import { FC } from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import facebookIcon from "../../assets/social/facebook-white.svg";
import instagramIcon from "../../assets/social/instagram-white.svg";
import twitterIcon from "../../assets/social/twitter-white.svg";
import appStoreIcon from "../../assets/store/app-store.svg";
import googlePlayIcon from "../../assets/store/play-store.svg";
import microsoftStoreIcon from "../../assets/store/windows-store.svg";
import styles from "./Footer.module.css";
import LinkList from "../atoms/LinkList";
import { footerLinks } from "../../constants/constants";

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
            <Grid item xs={12} sm={6} p={2}>
              <Grid
                item
                className={styles.socialIcons}
                sx={{ justifyContent: { xs: "center", md: "left" } }}
              >
                <Link href="#">
                  <img src={facebookIcon} alt="Facebook" />
                </Link>
                <Link href="#">
                  <img src={twitterIcon} alt="Twitter" />
                </Link>
                <Link href="#">
                  <img src={instagramIcon} alt="Instagram" />
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} p={2}>
              <Grid item className={styles.storeIcons}>
                <Grid
                  container
                  sx={{ justifyContent: { xs: "center", md: "left" } }}
                >
                  <Grid item>
                    <Link href="#">
                      <img src={appStoreIcon} alt="App Store" />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#">
                      <img src={googlePlayIcon} alt="Google Play" />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#">
                      <img src={microsoftStoreIcon} alt="Microsoft Store" />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
