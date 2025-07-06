import FormAddWarga from "./components/FormAddWarga";
import ListKepalaKeluarga from "./components/ListKepalaKeluarga";
import ListWarga from "./components/ListWarga";

const Peoples = () => {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <FormAddWarga />
        <ListWarga />
      </div>

      <div>
        <ListKepalaKeluarga />
      </div>
    </>
  );
};

export default Peoples;
