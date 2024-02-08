import { Stack } from "@mui/material";
import React from "react";
import BasicsCard from "./BasicsCard";
import ComplexInteraction from "./ComplexInteraction";
import WithMedia from "./WithMedia";
import PrimaryAction from "./PrimaryAction";
import UIControls from "./UIControls";

const MainCards = () => {
  return (
    <Stack gap={2}>
      <BasicsCard />
      <ComplexInteraction />
      <WithMedia />
      <PrimaryAction />
      <UIControls />
    </Stack>
  );
};

export default MainCards;
