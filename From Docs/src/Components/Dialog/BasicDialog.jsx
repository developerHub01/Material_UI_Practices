import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { Add, Person } from "@mui/icons-material";

const emails = ["username@gmail.com", "user02@gmail.com"];

const SimpleDialog = ({ open, onClose, selectedValue }) => {
  return (
    <Dialog open={open} onClose={() => onClose(selectedValue)}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => onClose(email)}>
              <ListItemAvatar>
                <Avatar>
                  <Person />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton onClick={() => onClose("addAcount")}>
            <ListItemAvatar>
              <Avatar>
                <Add />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
};

const BasicDialog = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[0]);
  const handleClickOpen = () => {
    setOpen((prev) => true);
  };
  const handleClose = (value) => {
    setOpen((prev) => false);
    setSelectedValue(value);
  };
  return (
    <Stack gap={2} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Simple dialog
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        selectedValue={selectedValue}
      />
    </Stack>
  );
};

export default BasicDialog;
