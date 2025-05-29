import { useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import Topbar from "../../core/components/Topbar";
import CustomButton from "../../core/components/Button";
import { Grid2 } from "@mui/material";
import { drawerWidth } from "../../core/constants";
import Card from "../../core/components/Card"
import CardTotalWarga from "./components/CardTotalWarga";
import CardTotalKas from "./components/CardTotalKas";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(!open);

  return (
    <>
      <Sidebar open={open} />
      <Topbar handleDrawer={handleDrawer} open={open} />

      <div
        style={{
          position: "fixed",
          left: open ? `${drawerWidth}px` : 0,
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          transition: "left 0.2s",
          top: "70px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Grid2 container display="flex" spacing={3} flex="wrap">
          <Grid2 size={4} justifyContent="center" alignItems="center">
            <CardTotalWarga />
          </Grid2>
          <Grid2 size={4} justifyContent="center" alignItems="center">
            <CardTotalKas />
          </Grid2>
          <Grid2 size={4} justifyContent="center" alignItems="center">
            <CardTotalKas />
          </Grid2>
        </Grid2>
      </div>
    </>
  );
};

export default Dashboard;
