import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import CommentIcon from "@mui/icons-material/Comment";

const darkColor = "#212121";
const deepDarkColor = "#121212";
const whiteColor = "#fff";
const grayColor = "#ddd";

const GutterlessList = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: darkColor,
        color: whiteColor,
      }}
    >
      {[1, 2, 3].map((item) => (
        <ListItem
          key={item}
          disableGutters
          secondaryAction={
            <IconButton>
              <CommentIcon
                sx={{
                  color: whiteColor,
                }}
              />
            </IconButton>
          }
        >
          <ListItemText primary={`Line item ${item}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default GutterlessList;
