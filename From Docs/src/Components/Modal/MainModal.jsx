import { Stack } from "@mui/material";
import React from "react";
import BasicModal from "./BasicModal";
import NestedModal from "./NestedModal";
import TransitionsModal from "./TransitionsModal";
import PerformanceModal from "./PerformanceModal";

const MainModal = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} gap={3} p={3}>
      <BasicModal />
      <NestedModal />
      <TransitionsModal />
      <PerformanceModal />
    </Stack>
  );
};

export default MainModal;
