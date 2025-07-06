import { DataGrid } from "@mui/x-data-grid";

const CustomTable = ({rows, columns, data, pagination, paginationModel, pageSizeOptions, checkboxSelection, sx}) => {
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        dataSource={data}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        sx={sx}
      />
    </>
  );
};

export default CustomTable;
