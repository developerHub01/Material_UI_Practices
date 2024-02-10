import { Stack } from "@mui/material";
import React from "react";
import ExclusiveSelection from "./ExclusiveSelection";
import MultipleSelection from "./MultipleSelection";
import Size from "./Size";
import Color from "./Color";
import VerticalButtons from "./VerticalButtons";
import StandaloneToggleButton from "./StandaloneToggleButton";
import Customization from "./Customization";
import EnforceValueSet from "./EnforceValueSet";

const MainToggleButton = () => {
  return (
    <Stack
      display={"flex"}
      flexWrap={"wrap"}
      gap={2}
      p={4}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ExclusiveSelection />
      <MultipleSelection />
      <Size />
      <Color />
      <VerticalButtons />
      <StandaloneToggleButton />
      <Customization />
      <EnforceValueSet />
    </Stack>
  );
};

export default MainToggleButton;
