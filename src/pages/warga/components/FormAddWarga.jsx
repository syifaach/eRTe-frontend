import { Grid2 } from "@mui/material";
import CustomCard from "../../../core/components/Card/Card";
import Input from "../../../core/components/Input/Input";
import RadioButton from "../../../core/components/RadioButton/RadioButton";

const FormAddWarga = () => {
  const genderOptions = [
    { key: "laki-laki", value: "laki-laki", label: "Laki-laki" },
    { key: "perempuan", value: "perempuan", label: "Perempuan" },
  ];

  const statusOptions = [
    { key: "lajang", value: "lajang", label: "Lajang" },
    { key: "menikah", value: "menikah", label: "Menikah" },
  ];

  const Content = () => {
    return (
      <>
        <div>
          <Grid2 container spacing={2} display={"flex"}>
            <Grid2 size={12}>
              <Input
                id={"name"}
                name={"name"}
                label={"Nama"}
                placeholder={"Nama"}
                size={"small"}
              />
            </Grid2>

            <Grid2 size={6}>
              <RadioButton
                row={true}
                name={"gender"}
                options={genderOptions}
                label={"Jenis Kelamin"}
              />
            </Grid2>

            <Grid2 size={6}>
              <RadioButton
                row={true}
                name={"status"}
                options={statusOptions}
                label={"Status"}
              />
            </Grid2>

            <Grid2 size={12}>
              <Input
                id={"address"}
                name={"address"}
                label={"Alamat"}
                placeholder={"Alamat"}
                size={"small"}
                multiline={true}
              />
            </Grid2>

            <Grid2 size={6}>
              <Input
                id={"education"}
                name={"education"}
                label={"Pendidikan"}
                placeholder={"Pendidikan"}
                size={"small"}
              />
            </Grid2>

            <Grid2 size={6}>
              <Input
                id={"job"}
                name={"job"}
                label={"Pekerjaan"}
                placeholder={"Pekerjaan"}
                size={"small"}
              />
            </Grid2>

            <Grid2 size={12}>
              <Input
                id={"headFamily"}
                name={"headFamily"}
                label={"Kepala Keluarga"}
                placeholder={"Kepala Keluarga"}
                size={"small"}
              />
            </Grid2>
          </Grid2>
        </div>
      </>
    );
  };

  return (
    <>
      <CustomCard
        header={true}
        headerTitle={"Form Tambah Warga"}
        content={<Content />}
      />
    </>
  );
};

export default FormAddWarga;
