import React from "react";
import BasicMenu from "./BasicMenu";
import { Stack } from "@mui/material";
import IconMenu from "./IconMenu";
import DenseMenu from "./DenseMenu";
import SelectedMenu from "./SelectedMenu";
import PositionedMenu from "./PositionedMenu";
import AccountMenu from "./AccountMenu";
import Customization from "./Customization";
import MaxHeightMenu from "./MaxHeightMenu";
import Limitations from "./Limitations";
import ContextMenu from "./ContextMenu";

const MainMenu = () => {
  return (
    <Stack p={4} justifyContent={"center"} alignItems={"center"} gap={3}>
      <BasicMenu />
      <IconMenu />
      <DenseMenu />
      <SelectedMenu />
      <PositionedMenu />
      <AccountMenu />
      <Customization />
      <MaxHeightMenu />
      <Limitations />
      <ContextMenu />
    </Stack>
  );
};

export default MainMenu;
