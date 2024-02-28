import {
  ExpandLess,
  ExpandMore,
  Grain,
  Home,
  NavigateNext,
  Whatshot,
} from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Collapse,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MainBreadcrumbs = () => {
  const [maxSize, setMaxSize] = useState(Number.MAX_SAFE_INTEGER);
  const handleChangeSize = () => {
    setMaxSize((prev) =>
      prev === Number.MAX_SAFE_INTEGER ? 2 : Number.MAX_SAFE_INTEGER
    );
  };
  const handleClick = (e) => e.preventDefault();
  const breadcrumbsList = [
    <Link
      underline="hover"
      key={"1"}
      color={"inherit"}
      href="/"
      onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key={"2"}
      color={"inherit"}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key={"3"} color={"text.primary"}>
      Breadcrumb
    </Typography>,
  ];
  const breadcrumbsListWithIcons = [
    <Link
      key={1}
      underline="hover"
      sx={{ display: "flex", alignItems: "center" }}
      color={"inherit"}
      href="/"
    >
      <Home sx={{ mr: 0.5 }} fontSize="inherit" />
      MUI
    </Link>,
    <Link
      key={2}
      underline="hover"
      sx={{ display: "flex", alignItems: "center" }}
      color={"inherit"}
      href="/material-ui/getting-started/installation/"
    >
      <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
      Core
    </Link>,
    <Typography
      key={3}
      sx={{ display: "flex", alignItems: "center" }}
      color={"text.primary"}
    >
      <Grain sx={{ mr: 0.5 }} fontSize="inherit" />
      Breadcrumb
    </Typography>,
  ];
  return (
    <Stack justifyContent={"center"} alignItems={"center"} gap={2} p={3}>
      <Box role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumbs">
          <Link underline="hover" color={"inherit"} href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color={"inherit"}
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color={"text.primary"}>Breadcrumbs</Typography>
        </Breadcrumbs>
      </Box>
      <Box role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color={"inherit"} href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color={"inherit"}
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Link
            underline="hover"
            color={"text.primary"}
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Breadcrumbs
          </Link>
        </Breadcrumbs>
      </Box>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbsList}
      </Breadcrumbs>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbsList}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbsList}
      </Breadcrumbs>
      <Box role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbsListWithIcons}
        </Breadcrumbs>
      </Box>
      <Stack
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        role="presentation"
        onClick={handleClick}
      >
        <Breadcrumbs maxItems={maxSize} aria-label="breadcrumb">
          <Link underline="hover" color={"inherit"} href="/">
            Home
          </Link>
          <Link underline="hover" color={"inherit"} href="/">
            Catalog
          </Link>
          <Link underline="hover" color={"inherit"} href="/">
            Accessories
          </Link>
          <Link underline="hover" color={"inherit"} href="/">
            New Collection
          </Link>
          <Typography color={"text.primary"} href="/">
            Belts
          </Typography>
        </Breadcrumbs>
        <Button variant="contained" onClick={handleChangeSize}>
          Change Size
        </Button>
      </Stack>
      <Box role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Chip
            component={"a"}
            href="#"
            label="Home"
            icon={<Home fontSize="small" />}
          />
          <Chip component={"a"} href="#" label="Catalog" />
          <Chip
            component={"a"}
            href="#"
            label="Accessories"
            deleteIcon={<Home fontSize="small" />}
            onDelete={handleClick}
          />
        </Breadcrumbs>
      </Box>
    </Stack>
  );
};

export default MainBreadcrumbs;
