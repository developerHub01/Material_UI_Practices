import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const listData = [
  {
    id: 0,
    icon: <InboxIcon />,
    primary: "Inbox",
  },
  {
    id: 1,
    icon: <DraftsIcon />,
    primary: "Drafts",
  },
  {
    id: 2,
    divider: true,
  },
  {
    id: 3,
    primary: "Trash",
  },
  {
    id: 4,
    primary: "Spam",
  },
];

const darkColor = "#212121";
const whiteColor = "#fff";
const grayColor = "#ddd";

const SelectedListItem = () => {
  const [selectedId, setSelectedId] = useState(0);
  const handleSelect = (id) => {
    setSelectedId((prev) => id);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List
        component="nav"
        sx={{
          width: "100%",
          maxWidth: 350,
          background: darkColor,
          color: whiteColor,
        }}
      >
        {listData.map((item) => (
          <React.Fragment key={item.id}>
            {item?.divider ? (
              <Divider
                sx={{
                  bgcolor: grayColor,
                  my: 1,
                }}
              />
            ) : (
              <ListItem disablePadding>
                <ListItemButton
                  selected={item.id === selectedId}
                  onClick={() => handleSelect(item.id)}
                >
                  {item?.icon && (
                    <ListItemIcon sx={{ color: whiteColor }}>
                      {item?.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={item?.primary} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default SelectedListItem;
