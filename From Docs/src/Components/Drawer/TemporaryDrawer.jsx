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
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => setOpen((prev) => newOpen);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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
    <Stack p={4} justifyContent={"center"} alignItems={"center"}>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Stack>
  );
};

export default TemporaryDrawer;
