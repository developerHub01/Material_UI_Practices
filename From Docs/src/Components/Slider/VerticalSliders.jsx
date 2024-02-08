import { Slider, Stack } from "@mui/material";
import React from "react";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

const VerticalSliders = () => {
  const preventHorizontalKeyBoardNavigation = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") e.preventDefault();
  };
  return (
    <Stack
      sx={{
        height: 300,
      }}
      gap={1}
      direction={"row"}
    >
      <Slider
        orientation="vertical"
        valueLabelDisplay="auto"
        defaultValue={30}
      />
      <Slider
        orientation="vertical"
        valueLabelDisplay="auto"
        defaultValue={30}
        disabled
      />
      <Slider
        orientation="vertical"
        valueLabelDisplay="auto"
        defaultValue={[30, 70]}
        marks={marks}
      />
      <Slider
        orientation="vertical"
        valueLabelDisplay="auto"
        defaultValue={[30, 70]}
        marks={marks}
        step={null}
      />

      <Slider
        sx={{
          "& input[type='range']": {
            WebkitAppearance: "slider-vertical",
          },
        }}
        orientation="vertical"
        valueLabelDisplay="auto"
        defaultValue={30}
        step={10}
        onKeyDown={preventHorizontalKeyBoardNavigation}
      />
    </Stack>
  );
};

export default VerticalSliders;
