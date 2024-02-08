import { Stack } from "@mui/material";
import React, { useState } from "react";
import ContinuousSliders from "./Slider/ContinuousSliders";
import Sizes from "./Slider/Sizes";
import DiscreteSliders from "./Slider/DiscreteSliders";
import MinimumDistance from "./Slider/MinimumDistance";

const MainSlider = () => {
  return (
    <Stack gap={3}>
      <ContinuousSliders />
      <Sizes />
      <DiscreteSliders />
      <MinimumDistance />
    </Stack>
  );
};

export default MainSlider;
