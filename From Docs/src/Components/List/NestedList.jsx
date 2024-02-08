import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useState } from "react";

const NestedList = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack
      sx={{
        background: "#212121",
        color: "#fff",
        width: "100%",
        maxWidth: 300,
      }}
    >
      <List
        sx={{ width: "100%" }}
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            sx={{ background: "inherit", color: "inherit" }}
          >
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Send mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={() => setOpen((prev) => !prev)}>
          <ListItemIcon>
            <InboxIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} unmountOnExit>
          <List disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Stack>
  );
};

export default NestedList;
