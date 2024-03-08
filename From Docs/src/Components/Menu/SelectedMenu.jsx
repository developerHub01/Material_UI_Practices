import {
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

const SelectedMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (e) => setAnchorEl((prev) => e.currentTarget);
  const handleClose = () => setAnchorEl((prev) => null);
  const handleMenuItemClick = (e, index) => {
    setSelectedIndex((prev) => index);
    setAnchorEl((prev) => null);
  };
  return (
    <div>
      <List
        component={"nav"}
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          onClick={handleClickListItem}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="When device is locked"
          aria-expanded={open ? "true" : undefined}
        >
          <ListItemText
            primary="When device is locked"
            secondary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(e) => handleMenuItemClick(e, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SelectedMenu;
