import Card from "../../../core/components/Card/Card";
import familyColor from "../../../assets/familyColour.png";
import { Grid2 } from "@mui/material";
import "../index.css";

const CardTotalWarga = () => {
  const CardContent = () => {
    return (
      <>
        <div>
          <Grid2 size={12} display="flex">
            <h4 style={{ marginTop: '8px', marginBottom: "3px" }}>120 Warga</h4>
          </Grid2>
          <Grid2 size={12} display="flex">
            <h4 style={{ marginTop: 0, marginBottom: 0 }}>60 Kartu Keluarga</h4>
          </Grid2>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="card">
        <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Total Warga</h3>
        <label>Per Tanggal 07 Juli 2025</label>
        <CardContent />
        <img src={familyColor} className="card-image" />
      </div>
    </>
  );
};

export default CardTotalWarga;
