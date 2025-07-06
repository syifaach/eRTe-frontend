import { useState } from "react";
import FormAddKepalaKeluarga from "./components/FormAddKepalaKeluarga";
import FormAddWarga from "./components/FormAddWarga";
import ListKepalaKeluarga from "./components/ListKepalaKeluarga";
import ListWarga from "./components/ListWarga";

const Peoples = () => {
  const [isAddPeoples, setIsAddPeoples] = useState(false);
  const [isAddHeadFamily, setIsAddHeadFamily] = useState(false);

  return (
    <>
      {isAddPeoples ? (
        <FormAddWarga setIsAddPeoples={setIsAddPeoples} />
      ) : isAddHeadFamily ? (
        <FormAddKepalaKeluarga />
      ) : (
        <>
          <div style={{ marginBottom: "30px" }}>
            <ListWarga setIsAddPeoples={setIsAddPeoples} />
          </div>

          <div>
            <ListKepalaKeluarga />
          </div>
        </>
      )}
    </>
  );
};

export default Peoples;
