import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ConfirmationDialogRaw = ({
  open,
  onClose,
  value: valueProp,
  ...other
}) => {
  const [value, setValue] = useState(valueProp);
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleOk = () => {
    onClose(value);
  };
  const handleCancel = () => {
    onClose();
  };
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          width: "90%",
          maxWidth: 500,
          maxHeight: 450,
        },
      }}
      {...other}
    >
      <DialogTitle>Phone Ringtone</DialogTitle>
      <DialogContent dividers>
        <RadioGroup>
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
              onChange={handleChange}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

const ConfirmationDialogs = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Dione");

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };
  return (
    <Paper sx={{ width: "100%", maxWidth: 500 }}>
      <List component={"div"} role="group">
        <ListItemButton divider disabled>
          <ListItemText primary="Interruptions" />
        </ListItemButton>
        <ListItemButton
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="phone ringtone"
          onClick={handleClickListItem}
        >
          <ListItemText primary={"Phone ringtone"} secondary={value} />
        </ListItemButton>
        <ListItemButton divider disabled>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItemButton>
        <ConfirmationDialogRaw
          open={open}
          onClose={handleClose}
          value={value}
          id="ringtone-menu"
          keepMounted
        />
      </List>
    </Paper>
  );
};

export default ConfirmationDialogs;
