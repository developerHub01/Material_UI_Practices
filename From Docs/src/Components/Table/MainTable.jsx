import { Stack } from "@mui/material";
import React from "react";
import BasicTable from "./BasicTable";
import DenseTable from "./DenseTable";
import SortingSelecting from "./SortingSelecting";

const MainTable = () => {
  return (
    <Stack gap={2}>
      <BasicTable />
      <DenseTable />
      <SortingSelecting />
    </Stack>
  );
};

export default MainTable;
