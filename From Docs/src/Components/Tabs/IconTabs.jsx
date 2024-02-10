import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

const IconTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
    >
      <Tab icon={<PhoneIcon />} label="RECENTS" />
      <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      <Tab icon={<PersonPinIcon />} label="NEARBY" />

      <Tab icon={<PhoneIcon />} label="TOP" />
      <Tab icon={<PhoneMissedIcon />} label="START" iconPosition="start" />
      <Tab icon={<FavoriteIcon />} label="END" iconPosition="end" />
      <Tab icon={<PersonPinIcon />} label="BOTTOM" iconPosition="bottom" />
    </Tabs>
  );
};

export default IconTabs;
