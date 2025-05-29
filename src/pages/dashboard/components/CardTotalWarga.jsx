import Card from "../../../core/components/Card";
import logo from "../../../assets/react.svg";
import { Grid2 } from "@mui/material";

const CardTotalWarga = () => {
  const CardContent = () => {
    return (
      <>
        <div>
          <Grid2 container spacing={2}>
            <Grid2 size={6} display="flex" justifyContent="start">
              <Grid2 size={6} display="flex">
                <h4>120 Warga</h4>
              </Grid2>
              <Grid2 size={6} display="flex">
                <h4>60 Kartu Keluarga</h4>
              </Grid2>
            </Grid2>

            <Grid2 size={6} display="flex" justifyContent="end">
              <img src={logo} />
            </Grid2>
          </Grid2>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          borderColor: "#cfdae7",
          borderStyle: "solid",
          borderWidth: "1px",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Total Warga</h3>
        <CardContent />
      </div>
    </>
  );
};

export default CardTotalWarga;
