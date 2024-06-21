import { FC, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Drawer as MUIDrawer,
  Button,
  Typography,
  Toolbar,
} from "@mui/material";
import Drawer from "../atoms/Drawer";
import TitleHeader from "../atoms/TitleHeader";

import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";

const drawerWidth = 240;

interface HeaderProps {
  title: string;
}
const Header: FC<HeaderProps> = ({ title }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawer = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: 12 }}>
      <AppBar
        component="nav"
        sx={{
          background:
            "linear-gradient(to top, rgb(1, 105, 255),rgb(0, 151, 255))",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", mx: { xs: 1, md: 8 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
          >
            DEMO Streaming
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                disableRipple
                sx={{
                  color: "#FFF",
                  textTransform: "capitalize",
                  mr: 2,
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Login
              </Button>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                disableRipple
                sx={{
                  color: "#FFF",
                  backgroundColor: "rgb(65, 65, 65)",
                  borderRadius: 0,
                  textTransform: "capitalize",
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Start your free trial
              </Button>
            </Link>
          </Box>
        </Toolbar>
        <TitleHeader title={title} />
      </AppBar>
      <nav>
        <MUIDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            color: "white",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              color: "fff",
              width: drawerWidth,
              backgroundColor: "rgb(1, 105, 255)",
            },
          }}
        >
          <Drawer handleDrawer={handleDrawer} />
        </MUIDrawer>
      </nav>
    </Box>
  );
};

export default Header;
