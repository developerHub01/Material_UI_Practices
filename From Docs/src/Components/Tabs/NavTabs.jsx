import { Box, Link, Tab, Tabs } from "@mui/material";
import React from "react";

const samePageLinkNavigation = (e)=>{
  if(e){
    
  }
}

const LinkTab = ({ label, href }) => {
  return (
    <Link href={href}>
      <Tab label={label} />
    </Link>
  );
};

const NavTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };
  return (
    <Box sx={{ with: "100%", maxWidth: 600 }}>
      <Tabs value={value} onChange={handleChange}>
        <LinkTab label="Page One" href="/one" />
        <LinkTab label="Page Two" href="/two" />
        <LinkTab label="Page Three" href="/three" />
      </Tabs>
    </Box>
  );
};

export default NavTabs;
