import { Button, Menu, MenuItem, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl((prev) => e.currentTarget);
  const handleClose = () => setAnchorEl((prev) => null);
  return (
    <>
      <Button
        id="basic-button"
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "basic-menu" : undefined}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default BasicMenu;
