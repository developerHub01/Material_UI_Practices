import {
  Avatar,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";

const darkColor = "#212121";
const whiteColor = "#fff";
const grayColor = "#ddd";

const firstListData = [
  {
    id: 1,
    text: "Iine Item 1",
  },
  {
    id: 2,
    text: "Iine Item 2",
  },
  {
    id: 3,
    text: "Iine Item 3",
  },
  {
    id: 4,
    text: "Iine Item 4",
  },
];

const secondListData = [
  {
    id: 1,
    avatarImg: "https://mui.com/static/images/avatar/1.jpg",
    title: "Line Item 1",
  },
  {
    id: 2,
    avatarImg: "https://mui.com/static/images/avatar/2.jpg",
    title: "Line Item 2",
  },
  {
    id: 3,
    avatarImg: "https://mui.com/static/images/avatar/3.jpg",
    title: "Line Item 3",
  },
  {
    id: 4,
    avatarImg: "https://mui.com/static/images/avatar/4.jpg",
    title: "Line Item 4",
  },
];

const ListControls = () => {
  const [checkedFirstListState, setCheckedFirstListState] = useState([0]);
  const [checkedSecondListState, setCheckedSecondListState] = useState([0]);
  const handleFirstListClick = (id) => {
    const isAlreadyExist = checkedFirstListState.includes(id);
    if (isAlreadyExist)
      return setCheckedFirstListState((prev) =>
        prev.filter((item) => item !== id)
      );
    else return setCheckedFirstListState((prev) => [id, ...prev]);
  };
  const handleSecondListClick = (id) => {
    const isAlreadyExist = checkedSecondListState.includes(id);
    if (isAlreadyExist)
      return setCheckedSecondListState((prev) =>
        prev.filter((item) => item !== id)
      );
    else return setCheckedSecondListState((prev) => [id, ...prev]);
  };
  return (
    <Stack gap={2} direction="column">
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: darkColor,
          color: whiteColor,
        }}
      >
        {firstListData.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton>
                <CommentIcon
                  sx={{
                    color: whiteColor,
                  }}
                />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton onClick={() => handleFirstListClick(item.id)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checkedFirstListState.includes(item.id)}
                  sx={{
                    color: whiteColor,
                  }}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: darkColor,
          color: whiteColor,
        }}
        gap={5}
      >
        {secondListData.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <Checkbox
                checked={checkedSecondListState.includes(item.id)}
                onChange={() => handleSecondListClick(item.id)}
                sx={{
                  color: whiteColor,
                }}
              />
            }
            disablePadding
          >
            <ListItemButton onClick={() => handleSecondListClick(item.id)}>
              <ListItemAvatar>
                <Avatar src={item.avatarImg} alt={item.title} />
              </ListItemAvatar>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ListControls;
