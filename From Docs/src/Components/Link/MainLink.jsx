import { Link, Stack } from "@mui/material";
import React from "react";

const MainLink = () => {
  return (
    <Stack>
      <Link href="#">Link</Link>
      <Link href="#" variant="body1">
        Link
      </Link>
      <Link href="#" variant="button">
        Link
      </Link>
      <Link href="#" variant="h1">
        Link
      </Link>
      <Link href="#" variant="h1" underline="always">
        Link
      </Link>
      <Link href="#" variant="h1" underline="none">
        Link
      </Link>
      <Link href="#" variant="h1" underline="hover">
        Link
      </Link>
    </Stack>
  );
};

export default MainLink;
