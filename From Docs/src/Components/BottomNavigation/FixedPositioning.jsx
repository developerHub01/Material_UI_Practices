import { Archive, Favorite, Restore } from "@mui/icons-material";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const messageExamples = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];

const getShuffledList = () => {
  const getRandomIndex = (max) => Math.floor(Math.random() * max);

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomIndex(messageExamples.length)]
  );
};

const FixedPositioning = () => {
  const [value, setValue] = useState(0);
  const bodyRef = useRef(null);
  const [messages, setMessages] = useState(() => getShuffledList());
  useEffect(() => {
    bodyRef.current.ownerDocument.body.scrollTop = 0;
    setMessages((prev) => getShuffledList());
  }, [value, setMessages]);
  return (
    <Box ref={bodyRef}>
      <List>
        {messages.map(({ primary, secondary, person }, key) => (
          <ListItemButton key={key}>
            <ListItemAvatar>
              <Avatar alt="Profile pic" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItemButton>
        ))}
      </List>
      <Paper
        sx={{ position: "fixed", left: 0, right: 0, bottom: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => setValue((prev) => newValue)}
        >
          <BottomNavigationAction label="Recents" icon={<Restore />} />
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="Archive" icon={<Archive />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default FixedPositioning;
