import {
  Archive,
  Edit,
  FileCopy,
  KeyboardArrowDown,
  MoreHoriz,
} from "@mui/icons-material";
import { Button, Divider, Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";

const StyledMenu = styled((props) => (
  <Menu
    {...props}
    elevation={1}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65,81)"
        : theme.palette.grey[300],
  },
  "& .MuiButtonBase-root": {
    display: "flex",
    gap: theme.spacing(2),
  },
}));

const Customization = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <div>
      <Button
        onClick={handleClick}
        variant="contained"
        endIcon={<KeyboardArrowDown />}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        disableElevation
      >
        Options
      </Button>
      <StyledMenu
        aria-labelledby="demo-customized-button"
        id="demo-customized-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Edit />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopy />
          Duplicate
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} disableRipple>
          <Archive />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHoriz />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default Customization;
