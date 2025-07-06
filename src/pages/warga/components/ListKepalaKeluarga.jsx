import { Search } from "@mui/icons-material";
import CustomButton from "../../../core/components/Button/Button";
import CustomCard from "../../../core/components/Card/Card";
import Input from "../../../core/components/Input/Input";
import Table from "../../../core/components/Table/Table";
import { Grid2 } from "@mui/material";
import { columnsTableKepalaKeluarga, dummyData } from "../constants";

const ListKepalaKeluarga = () => {
  const paginationModel = { page: 0, pageSize: 5 };

  const Content = () => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flex: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: '15px'
          }}
        >
          <div>
            <h3 style={{ margin: 0 }}>Daftar Kepala Keluarga</h3>
          </div>

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
              label={"Tambah Kepala Keluarga"}
              size="large"
            />
          </div>
        </div>

        <Table
          columns={columnsTableKepalaKeluarga}
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

export default ListKepalaKeluarga;
