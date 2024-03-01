import { Inbox, Mail } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const AnchorDrawer = () => {
  const [state, setState] = useState({
    top: false,
    bottom: false,
    left: true,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (e) => {
    if ((e.type === "keydown" && e.key === "Tab") || e.key === "Shift") return;
    setState((prev) => ({ ...prev, [anchor]: open }));
  };

  const DrawerList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((item, key) => (
          <ListItem key={`${item}-${key + 1}`} disablePadding>
            <ListItemButton>
              <ListItemIcon>{key % 2 ? <Mail /> : <Inbox />}</ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((item, key) => (
          <ListItem key={`${item}-${key + 1}`} disablePadding>
            <ListItemButton>
              <ListItemIcon>{key % 2 ? <Mail /> : <Inbox />}</ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Stack
      p={4}
      direction={"row"}
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {["left", "right", "top", "bottom"].map((anchor, key) => (
        <React.Fragment key={`${anchor}-${key + 1}`}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {DrawerList(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default AnchorDrawer;
