import { FC } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

interface DrawerProps {
  handleDrawer: () => void;
}
const Drawer: FC<DrawerProps> = ({ handleDrawer }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box onClick={handleDrawer} sx={{ textAlign: "center", color: "white" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DEMO Streaming
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => handleNavigation("/")}
          >
            <ListItemText primary={"Log in"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => handleNavigation("/")}
          >
            <ListItemText primary={"Start your free trial"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Drawer;
