import { Inbox, Mail } from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";

const SwipeableDrawerComp = () => {
  const [state, setState] = useState({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });
  console.log(iOS);
  const toggleDrawer = (anchor, open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
    setState((prev) => ({ ...prev, [anchor]: open }));
  };
  const list = (anchor) => (
    <Box
      sx={{ width: ["top", "bottom"].includes(anchor) ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((item, i) => (
          <ListItem key={`${item}-${i + 1}`} disablePadding>
            <ListItemButton>
              <ListItemIcon>{!(i % 2) ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((item, i) => (
          <ListItem key={`${item}-${i + 1}`} disablePadding>
            <ListItemButton>
              <ListItemIcon>{!(i % 2) ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      p={4}
      flexWrap={"wrap"}
    >
      {["left", "right", "top", "bottom"].map((anchor, index) => (
        <React.Fragment key={anchor + "-" + (1 + index)}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            disableBackdropTransition
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default SwipeableDrawerComp;
