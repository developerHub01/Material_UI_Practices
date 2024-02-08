import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const BasicList = () => {
  return (
    <Stack
      sx={{
        background: "#212121",
        color: "#fff",
        width: "100%",
        maxWidth: 300,
      }}
    >
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider
        sx={{
          background: "#ddd",
        }}
      />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
};

export default BasicList;
