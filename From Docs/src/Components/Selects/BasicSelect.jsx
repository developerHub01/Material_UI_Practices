import {
  Box,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
  NativeSelect,
  Button,
  ListSubheader,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import React, { useState } from "react";

const BasicSelect = () => {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleChange = (e) => {
    setAge((prev) => e.target.value);
  };
  const handleOnCloseDialog = (e, reason) => {
    // console.log(reason);
    if (reason !== "backdropClick") setOpenDialog((prev) => false);
  };
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap={2}>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-common">Age</InputLabel>
        <Select
          labelId="age-id-common"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-standard">Age</InputLabel>
        <Select
          labelId="age-id-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-filled">Age</InputLabel>
        <Select
          labelId="age-id-filled"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-with-helper-text">Age</InputLabel>
        <Select
          labelId="age-id-with-helper-text"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>
          Form Helper Text And Label {age} {age && "selected"}
        </FormHelperText>
      </FormControl>
      <FormControl sx={{ minWidth: 150 }}>
        <Select displayEmpty value={age} onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-disabled">Age</InputLabel>
        <Select
          labelId="age-id-disabled"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl error sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-error">Age</InputLabel>
        <Select
          labelId="age-id-error"
          value={age}
          onChange={handleChange}
          label="Age"
          renderValue={(value) => `😁 - ${age} selected`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-readonly">Age</InputLabel>
        <Select
          labelId="age-id-readonly"
          value={age}
          onChange={handleChange}
          label="Age"
          // readOnly
          // or
          inputProps={{
            readOnly: true,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl required sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-required">Age</InputLabel>
        <Select
          labelId="age-id-required"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      {/* Native select */}
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel variant="outlined" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>

      <Box sx={{ minWidth: 150 }}>
        <Button
          sx={{ display: "block", mb: 2 }}
          onClick={(e) => setOpen((prev) => true)}
          variant="contained"
        >
          Open The Select
        </Button>
        <FormControl fullWidth>
          <InputLabel id="age-id-controlled">Age</InputLabel>
          <Select
            labelId="age-id-controlled"
            open={open}
            onClose={(e) => setOpen((prev) => false)}
            onOpen={(e) => setOpen((prev) => true)}
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="age-id-grouping">Age</InputLabel>
        <Select
          labelId="age-id-grouping"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="" sx={{ pl: 3.5 }}>
            <em>None</em>
          </MenuItem>
          <ListSubheader>Even</ListSubheader>
          <MenuItem value={10} sx={{ pl: 3.5 }}>
            Ten
          </MenuItem>
          <MenuItem value={20} sx={{ pl: 3.5 }}>
            Twenty
          </MenuItem>
          <MenuItem value={30} sx={{ pl: 3.5 }}>
            Thirty
          </MenuItem>
          <ListSubheader>Odd</ListSubheader>
          <MenuItem value={15} sx={{ pl: 3.5 }}>
            Fifteen
          </MenuItem>
          <MenuItem value={25} sx={{ pl: 3.5 }}>
            Twenty Five
          </MenuItem>
        </Select>
      </FormControl>

      {/* With a dialog */}
      <Box sx={{ minWidth: 150 }}>
        <Button onClick={() => setOpenDialog((prev) => true)}>
          Open To Select Age
        </Button>
        <Dialog open={openDialog} onClose={handleOnCloseDialog}>
          <DialogTitle>Enter your age</DialogTitle>
          <DialogContent>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="age-id-dialog">Age</InputLabel>
              <Select
                labelId="age-id-dialog"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleOnCloseDialog}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleOnCloseDialog}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default BasicSelect;
