import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const darkColor = "#212121";
const deepDarkColor = "#121212";
const whiteColor = "#fff";
const grayColor = "#ddd";

const InsetListItem = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: darkColor,
        color: whiteColor,
      }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon
              sx={{
                color: whiteColor,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="First Item" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Second Item" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default InsetListItem;
