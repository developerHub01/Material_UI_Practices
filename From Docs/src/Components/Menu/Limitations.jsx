import { Drafts, PriorityHigh, Send } from "@mui/icons-material";
import {
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const Limitations = () => {
  return (
    <Paper sx={{ width: 220 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Send fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">A short message</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHigh fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            A very long text that overflows
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Drafts fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default Limitations;
