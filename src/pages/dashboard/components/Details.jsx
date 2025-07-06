import { Grid2 } from "@mui/material";
import CustomCard from "../../../core/components/Card/Card";
import Table from "../../../core/components/Table/Table";
import {
  columnsTablePengurusDKM,
  columnsTablePengurusRT,
  dummyData,
} from "../constants";

const Details = () => {
  const paginationModel = { page: 0, pageSize: 5 };

  const Content = () => {
    return (
      <div>
        <Grid2 container display="flex" spacing={3} flex="wrap">
          <Grid2 size={6}>
            <label>Daftar Pengurus RT 001 RW 021</label>
            <Table
              columns={columnsTablePengurusRT}
              rows={dummyData}
              paginationModel={paginationModel}
              pageSizeOptions={[5, 10]}
            />
          </Grid2>

          <Grid2 size={6}>
            <label>Daftar Pengurus DKM Musholla RT 001 RW 021</label>
            <Table
              columns={columnsTablePengurusDKM}
              rows={dummyData}
              paginationModel={paginationModel}
              pageSizeOptions={[5, 10]}
            />
          </Grid2>
        </Grid2>
      </div>
    );
  };

  return (
    <>
      <CustomCard
        header={true}
        headerTitle={"Details"}
        content={<Content />}
        styleContent={{ padding: "0px 20px 20px 20px" }}
      ></CustomCard>
    </>
  );
};

export default Details;
