import {
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Grid2,
} from "@mui/material";
import CustomButton from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar } from "@mui/material";
import { drawerWidth } from "../constants";

const Topbar = ({ open, handleDrawer }) => {
  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "white",
          color: "black",
          left: open ? drawerWidth : 0,
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          transition: "left 0.2s",
        }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>

          <div style={{ width: "100%" }}>
            <Grid2 container spacing={2}>
              <Grid2
                size={6}
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                <Typography variant="h6" noWrap component="div">
                  eRTe
                </Typography>
              </Grid2>

              <Grid2
                size={6}
                display="flex"
                justifyContent="end"
                alignItems="center"
              >
                <Avatar>SC</Avatar>
              </Grid2>
            </Grid2>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topbar;
