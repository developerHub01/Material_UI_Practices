import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import { useState } from "react";

const darkColor = "#212121";
const whiteColor = "#fff";
const grayColor = "#ddd";

const SwitchList = () => {
  const [checked, setChecked] = useState({
    wifi: false,
    bluetooth: false,
  });
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 350,
        background: darkColor,
        color: whiteColor,
      }}
    >
      <ListSubheader
        sx={{
          bgcolor: darkColor,
          color: whiteColor,
          fontSize: 22,
          fontWeight: "semibold",
        }}
      >
        Setting
      </ListSubheader>
      <ListItem>
        <ListItemIcon>
          <WifiIcon sx={{ color: whiteColor }} />
        </ListItemIcon>
        <ListItemText primary="Wi-Fi" />
        <Switch
          edge="end"
          onChange={() => {
            setChecked((prev) => ({
              ...prev,
              wifi: !prev["wifi"],
            }));
          }}
          checked={checked.wifi}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BluetoothIcon sx={{ color: whiteColor }} />
        </ListItemIcon>
        <ListItemText primary="Bluetooth" />
        <Switch
          edge="end"
          onChange={() => {
            setChecked((prev) => ({
              ...prev,
              bluetooth: !prev["bluetooth"],
            }));
          }}
          checked={checked.bluetooth}
        />
      </ListItem>
    </List>
  );
};

export default SwitchList;
