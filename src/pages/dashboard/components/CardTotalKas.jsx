import Card from "../../../core/components/Card";
import logo from "../../../assets/react.svg";
import { Grid2 } from "@mui/material";

const CardTotalKas = () => {
  const CardContent = () => {
    return (
      <>
        <div>
          <Grid2 container spacing={2}>
            <Grid2 size={6} display="flex" justifyContent="start">
              <div>
                <label>Per tanggal 23 Maret 2025</label>
                <h4 style={{ margin: "0px" }}>Rp 6.000.000</h4>
              </div>
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
      {/* <Card header={true} headerTitle="Total Kas" content={<CardContent />} /> */}
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
        <h3 style={{ marginTop: 0, marginBottom: '10px' }}>Total Kas</h3>
        <CardContent />
      </div>
    </>
  );
};

export default CardTotalKas;
