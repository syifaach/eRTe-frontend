import { useState } from "react";
import { Grid2 } from "@mui/material";
import CardTotalWarga from "./components/CardTotalWarga";
import CardTotalKas from "./components/CardTotalKas";
import CardTotalKasMusholla from "./components/CardTotalKasMusholla";
import Details from "./components/Details";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(!open);

  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <Grid2 container display="flex" spacing={3} flex="wrap">
          <Grid2 size={4} justifyContent="center" alignItems="center">
            <CardTotalWarga />
          </Grid2>
          <Grid2 size={4} justifyContent="center" alignItems="center">
            <CardTotalKas />
          </Grid2>
          <Grid2 size={4} justifyContent="center" alignItems="center">
            <CardTotalKasMusholla />
          </Grid2>
        </Grid2>
      </div>

      <Details />
    </>
  );
};

export default Dashboard;
