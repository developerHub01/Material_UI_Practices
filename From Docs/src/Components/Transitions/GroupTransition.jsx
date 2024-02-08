import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import DeleteIcon from "@mui/icons-material/Delete";

const FRUITS = [
  "🍏 Apple",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥥 Coconut",
  "🍉 Watermelon",
];

const GroupTransition = () => {
  const [fruitsInBasket, setFruitInBasket] = useState([]);
  const handleAddFruit = () => {
    const itemToAdd = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (!itemToAdd) return;
    setFruitInBasket((prev) => [itemToAdd, ...prev]);
  };
  const handleRemove = (item) => {
    setFruitInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };
  return (
    <div
      style={{
        width: 300,
      }}
    >
      <Button
        sx={{
          width: "100%",
        }}
        variant="contained"
        disabled={fruitsInBasket.length >= FRUITS.length}
        onClick={handleAddFruit}
      >
        Add Fruit
      </Button>
      <List
        mt={1}
        sx={{
          width: 300,
        }}
      >
        <TransitionGroup>
          {fruitsInBasket.map((item) => (
            <Collapse key={item}>
              <ListItem
                sx={{
                  width: "100%",
                }}
                secondaryAction={
                  <IconButton onClick={() => handleRemove(item)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={item} />
              </ListItem>
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </div>
  );
};

export default GroupTransition;
