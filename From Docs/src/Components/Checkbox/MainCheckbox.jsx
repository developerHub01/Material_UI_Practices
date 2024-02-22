import {
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
} from "@mui/material";
import { green, pink, red } from "@mui/material/colors";
import React, { useState } from "react";
import IndeterminateCheckBox from "./IndeterminateCheckBox";

const label = {
  inputProps: {
    "aria-label": "checkbox demo",
  },
};

const MainCheckbox = () => {
  const [firstCheckBox, setFirstCheckBox] = useState(false);
  return (
    <Box
      gap={3}
      p={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel control={<Checkbox />} required label="*Required" />
        <FormControlLabel control={<Checkbox />} disabled label="Disabled" />
      </FormGroup>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked size="medium" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 50,
          },
        }}
      />
      <Checkbox {...label} color="secondary" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: green[500],
          "&.Mui-checked": {
            color: pink[700],
          },
          "& .MuiSvgIcon-root": {
            fontSize: 50,
          },
        }}
      />
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 80,
          },
          color: red[100],
          "&.Mui-checked": {
            color: red[800],
          },
        }}
      />
      <FormGroup
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "cneter",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <FormControlLabel
          label="TOP"
          control={<Checkbox />}
          labelPlacement="top"
        />
        <FormControlLabel
          label="BOTTOM"
          labelPlacement="bottom"
          control={<Checkbox />}
        />
        <FormControlLabel
          label="START"
          labelPlacement="start"
          control={<Checkbox />}
        />
        <FormControlLabel
          label="END"
          labelPlacement="end"
          control={<Checkbox />}
        />
      </FormGroup>
      <Checkbox
        checked={firstCheckBox}
        onChange={() => setFirstCheckBox((prev) => !prev)}
      />
      <IndeterminateCheckBox />
    </Box>
  );
};

export default MainCheckbox;
