import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const avatarImg = `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

const darkColor = "#212121";
const whiteColor = "#fff";
const grayColor = "#ddd";

const listData = [
  {
    avatarImg: avatarImg,
    title: "Brunch this weekend?",
    author: "Ali Connors",
    description: "I'll be in your neighborhood doing errands this",
  },
  {
    avatarImg: avatarImg,
    title: "Summer BBQ",
    author: "to Scott, Alex, Jennifer",
    description: "Wish I could come, but I'm out of town this",
  },
  {
    avatarImg: avatarImg,
    title: "Summer BBQ",
    author: "Sandra Adams",
    description: "Do you have Paris recommendations? Have you ever",
  },
];

const AlignListItems = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: darkColor,
        color: whiteColor,
        borderRadius: 2,
      }}
    >
      {listData.map(({ avatarImg, title, author, description }, i) => (
        <>
          <ListItem alignItems="flex-start" key={i}>
            <ListItemAvatar>
              <Avatar
                src={avatarImg}
                alt="Test avatar"
                sx={{
                  border: "2px solid",
                  borderColor: grayColor,
                  cursor: "pointer",
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={title}
              sx={{ color: whiteColor }}
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    mt={1}
                    fontWeight="bold"
                    display="inline-block"
                    component="span"
                    color={whiteColor}
                  >
                    {author}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    color={grayColor}
                  >
                    {" "}
                    — {description}…
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {i < listData.length - 1 && (
            <Divider variant="inset" sx={{ bgcolor: grayColor }} />
          )}
        </>
      ))}
    </List>
  );
};

export default AlignListItems;
