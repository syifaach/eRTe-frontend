import { Search } from "@mui/icons-material";
import CustomButton from "../../../core/components/Button/Button";
import CustomCard from "../../../core/components/Card/Card";
import Input from "../../../core/components/Input/Input";
import Table from "../../../core/components/Table/Table";
import { Grid2 } from "@mui/material";
import { columnsTableWarga, dummyData } from "../constants";

const ListWarga = () => {
  const paginationModel = { page: 0, pageSize: 5 };

  const Content = () => {
    return (
      <div>
        <Grid2
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginBottom={"15px"}
        >
          <Grid2 size={6}>
            <h3 style={{ margin: 0 }}>Daftar Warga</h3>
          </Grid2>

          <Grid2 size={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Input placeholder={"Search"} size="small" />
              <CustomButton
                variant={"outlined"}
                label={<Search />}
                size="large"
              />
              <CustomButton
                variant={"contained"}
                label={'Tambah Warga'}
                size="large"
              />
            </div>
          </Grid2>
        </Grid2>

        <Table
          columns={columnsTableWarga}
          rows={dummyData}
          paginationModel={paginationModel}
          pageSizeOptions={[5, 10]}
        />
      </div>
    );
  };

  return (
    <>
      <CustomCard content={<Content />}></CustomCard>
    </>
  );
};

export default ListWarga;
