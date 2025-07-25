import Card from "../../../core/components/Card/Card";
import coin from "../../../assets/moneyColour.png";
import "../index.css";

const CardTotalKas = () => {
  const CardContent = () => {
    return (
      <>
        <div>
          <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Total Kas</h3>

          <label>Per tanggal 23 Maret 2025</label>
          <h4 style={{ marginTop: "8px", marginBottom: 0 }}>Rp 6.000.000</h4>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="card">
        <CardContent />
        <img src={coin} className="card-image" />
      </div>
    </>
  );
};

export default CardTotalKas;
