import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const not = (a, b) => {
  return a.filter((item) => b.indexOf(item) === -1);
};
const intersection = (a, b) => {
  return a.filter((item) => b.indexOf(item) >= 0);
};
const union = (a, b) => {
  return [...a, ...not(b, a)];
};

const MainTransferList = () => {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([1, 2, 3, 4]);
  const [right, setRight] = useState([5, 6, 7, 8, 9, 10]);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleAllRight = () => {
    setLeft((prev) => []);
    setRight((prev) => union(right, left));
  };
  const handleAllLeft = () => {
    setRight((prev) => []);
    setLeft((prev) => union(left, right));
  };
  const handleMoveRight = () => {
    setRight((prev) => union(right, leftChecked));
    setLeft((prev) => not(left, leftChecked));
    setChecked((prev) => not(checked, leftChecked));
  };
  const handleMoveLeft = () => {
    setLeft((prev) => union(left, rightChecked));
    setRight((prev) => not(right, rightChecked));
    setChecked((prev) => not(checked, rightChecked));
  };
  const handleToggle = (value) => {
    checked.includes(value)
      ? setChecked((prev) => prev.filter((item) => item !== value))
      : setChecked((prev) => [...prev, value]);
  };
  const handleSelectAll = (listType = "left") => {
    const list = listType === "left" ? left : right;
    const listChecked = listType === "left" ? leftChecked : rightChecked;
    if (listChecked.length === list.length) {
      // If already checked all items
      setChecked((prev) => prev.filter((item) => !list.includes(item)));
    } else {
      // If not checked all items then check all
      setChecked((prev) => {
        const newCheckedList = [...prev];
        list.map(
          (item) => !checked.includes(item) && newCheckedList.push(item)
        );
        return newCheckedList;
      });
    }
  };

  const customList = (item, title, listType = "left") => {
    return (
      <Card sx={{ width: 250 }}>
        <CardHeader
          sx={{ px: 2, py: 1 }}
          avatar={
            <Checkbox
              checked={
                listType === "left"
                  ? !!(leftChecked.length && left.length === leftChecked.length)
                  : !!(
                      rightChecked.length &&
                      right.length === rightChecked.length
                    )
              }
              onClick={() => handleSelectAll(listType)}
              indeterminate={
                listType === "left"
                  ? !!(leftChecked.length && left.length !== leftChecked.length)
                  : !!(
                      rightChecked.length &&
                      right.length !== rightChecked.length
                    )
              }
              disabled={listType === "left" ? !left.length : !right.length}
              inputProps={{
                "aria-label": "all items selected",
              }}
            />
          }
          title={title}
          subheader={`${
            listType === "left" ? leftChecked.length : rightChecked.length
          } / ${listType === "left" ? left.length : right.length} selected`}
        />
        <Divider variant="fullWidth" orientation="horizontal" />
        <List sx={{ height: 250, overflow: "auto" }}>
          {item.map((value) => (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={() => handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(value)}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": `transfer-list-item-${value}-label`,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                id={`transfer-list-item-${value}-label`}
                primary={`List Item ${value}`}
              />
            </ListItemButton>
          ))}
        </List>
      </Card>
    );
  };
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      p={3}
    >
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>{customList(left, "Choices", "left")}</Grid>
        <Grid item>
          <Grid container direction={"column"} alignItems={"center"}>
            <Button
              sx={{ my: 0.5 }}
              variant="contained"
              size="small"
              aria-label="move all right"
              disabled={!left.length}
              onClick={handleAllRight}
            >
              {`>>`}
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="contained"
              size="small"
              aria-label="move selected right"
              disabled={!leftChecked.length}
              onClick={handleMoveRight}
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="contained"
              size="small"
              aria-label="move selected left"
              disabled={!rightChecked.length}
              onClick={handleMoveLeft}
            >
              &lt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="contained"
              size="small"
              aria-label="move all left"
              disabled={!right.length}
              onClick={handleAllLeft}
            >
              {`<<`}
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right, "Chosen", "right")}</Grid>
      </Grid>
    </Stack>
  );
};

export default MainTransferList;
