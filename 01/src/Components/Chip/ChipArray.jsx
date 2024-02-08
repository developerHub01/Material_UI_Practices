import { Chip, ListItem, Paper } from "@mui/material";
import React from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const ChipArray = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((item) => (
        <ListItem
          key={item.label}
          sx={{
            width: "auto",
          }}
        >
          <Chip
            icon={
              item.label.toLowerCase() === "react" ? <TagFacesIcon /> : null
            }
            label={item.label}
            onDelete={
              item.label.toLowerCase() === "react" ? null : handleDelete(item)
            }
          />
        </ListItem>
      ))}
    </Paper>
  );
};

export default ChipArray;
