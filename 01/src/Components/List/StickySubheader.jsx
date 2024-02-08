import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import React from "react";

const darkColor = "#212121";
const deepDarkColor = "#121212";
const whiteColor = "#fff";
const grayColor = "#ddd";

const StickySubheader = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        bgcolor: darkColor,
        color: whiteColor,
        "& ul": { padding: 0 },
      }}
      component="ul"
      disablePadding
    >
      {[0, 1, 2, 3, 4].map((selectionId) => (
        <li key={selectionId}>
          <ul>
            <ListSubheader
              sx={{
                bgcolor: deepDarkColor,
                color: whiteColor,
              }}
            >{`I am subheader ${selectionId}`}</ListSubheader>

            {[0, 1, 2].map((item) => (
              <ListItem key={item}>
                <ListItemText
                  sx={{
                    pl: 2,
                  }}
                  primary={`Item id ${item}`}
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default StickySubheader;
