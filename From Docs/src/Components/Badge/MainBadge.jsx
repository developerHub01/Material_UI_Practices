import styled from "@emotion/styled";
import { Add, Mail, Remove, ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  Stack,
  IconButton,
  Box,
  ButtonGroup,
  Button,
  FormControlLabel,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "2px solid #fff",
    padding: "4px",
  },
});

const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const MainBadge = () => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      p={3}
    >
      <Badge badgeContent={3} color="primary">
        <Mail color="action" />
      </Badge>
      <IconButton>
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCart />
        </StyledBadge>
      </IconButton>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge color="secondary" badgeContent={count}>
            <Mail />
          </Badge>
          <ButtonGroup>
            <Button onClick={() => setCount((prev) => Math.max(count - 1, 0))}>
              <Remove fontSize="small" />
            </Button>
            <Button onClick={() => setCount((prev) => prev + 1)}>
              <Add fontSize="small" />
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge color="secondary" variant="dot" invisible={show}>
            <Mail />
          </Badge>
          <FormControlLabel
            sx={{ color: "text.primary" }}
            label="Show Badge"
            control={
              <Switch
                checked={!show}
                onChange={() => setShow((prev) => !prev)}
              />
            }
          />
        </Box>
      </Box>
      <Stack spacing={4} direction="row">
        <Badge color="secondary" badgeContent={0}>
          <Mail />
        </Badge>
        <Badge color="secondary" badgeContent={0} showZero>
          <Mail />
        </Badge>
      </Stack>
      <Stack spacing={4} direction="row">
        <Badge color="secondary" badgeContent={99}>
          <Mail />
        </Badge>
        <Badge color="secondary" badgeContent={100}>
          <Mail />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999}>
          <Mail />
        </Badge>
      </Stack>
      <Badge color="secondary" variant="dot">
        <Mail />
      </Badge>
      <Stack spacing={3} direction="row">
        <Badge color="secondary" badgeContent="">
          {rectangle}
        </Badge>
        <Badge color="secondary" badgeContent="" variant="dot">
          {rectangle}
        </Badge>
        <Badge color="secondary" badgeContent="" overlap="circular">
          {circle}
        </Badge>
        <Badge color="secondary" badgeContent="" variant="dot">
          {circle}
        </Badge>
      </Stack>
    </Stack>
  );
};

export default MainBadge;
