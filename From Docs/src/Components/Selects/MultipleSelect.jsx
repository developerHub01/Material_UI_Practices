import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React from "react";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const MultipleSelect = () => {
  const [personName, setPersonName] = React.useState([]);
  const handleChangePersonName = (e) => {
    console.log(e.target);
    setPersonName((prev) =>
      typeof e?.target?.value === "string"
        ? e?.target?.value.split(",")
        : e?.target?.value
    );
  };
  const getStyles = (name, personName) => {
    return {
      background: personName.includes(name) ? "#34495e" : "#2c3e50",
      color: "white",
    };
  };
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      p={3}
    >
      <FormControl sx={{ minWidth: 150, maxWidth: 400 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          multiple
          value={personName}
          onChange={handleChangePersonName}
          label="Name"
          renderValue={(selected) => (
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName)}
            >
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default MultipleSelect;
