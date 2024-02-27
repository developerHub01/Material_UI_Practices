import { IconButton, Stack, SvgIcon, createSvgIcon } from "@mui/material";
import React from "react";

const HomeIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};
const HomeIcon2 = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  "Home"
);
const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

const MainIcons = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
      <HomeIcon color="primary" fontSize="large" />
      <HomeIcon2 color="success" />
      <PlusIcon fontSize="large" />
      <PlusIcon fontSize="small" />
    </Stack>
  );
};

export default MainIcons;
