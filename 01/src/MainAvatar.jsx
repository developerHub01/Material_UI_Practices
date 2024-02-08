import { Avatar, AvatarGroup, Badge, Stack } from "@mui/material";
import {
  amber,
  brown,
  cyan,
  deepOrange,
  green,
  indigo,
  lime,
  pink,
  purple,
  teal,
} from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";

const MainAvatar = () => {
  return (
    <Stack gap={2} justifyContent="center" alignItems="center">
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Avatar name"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Avatar name"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Avatar name"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar>A</Avatar>
        <Avatar sx={{ bgcolor: deepOrange["500"] }}>A</Avatar>
        <Avatar sx={{ bgcolor: green["500"] }}>A</Avatar>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Avatar name"
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ width: 20, height: 20 }}
        />
        <Avatar
          alt="Avatar name"
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ width: 40, height: 40 }}
        />
        <Avatar
          alt="Avatar name"
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ width: 80, height: 80 }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: indigo["500"] }}>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: teal["500"] }}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: amber["500"] }}>
          <AssignmentIcon />
        </Avatar>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: lime["500"] }} variant="square">
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: brown["500"] }} variant="rounded">
          R
        </Avatar>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ bgcolor: cyan["500"] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          S
        </Avatar>
        <Avatar
          sx={{ bgcolor: pink["500"] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        />
        <Avatar sx={{ bgcolor: purple["500"] }} src="/broken-image.jpg" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <AvatarGroup>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={2}>
        <AvatarGroup max={3}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={2}>
        <AvatarGroup total={24}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={2}>
        <AvatarGroup
          total={5555}
          renderSurplus={(surplus) => (
            <span>
              +{surplus < 1000 ? surplus : Math.floor(surplus / 1000) + "K"}
            </span>
          )}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar
              src="https://mui.com/static/images/avatar/2.jpg"
              alt="Avatar"
              sx={{ width: 25, height: 25, border: `2px solid #fff` }}
            />
          }
        >
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="Avatar">
            A
          </Avatar>
        </Badge>
      </Stack>
    </Stack>
  );
};

export default MainAvatar;
