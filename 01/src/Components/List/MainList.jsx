import { Stack } from "@mui/material";
import React from "react";
import BasicList from "./BasicList";
import NestedList from "./NestedList";
import FolderList from "./FolderList";
import Interactive from "./Interactive";
import SelectedListItem from "./SelectedListItem";
import AlignListItems from "./AlignListItems";
import ListControls from "./ListControls";
import SwitchList from "./SwitchList";
import StickySubheader from "./StickySubheader";
import InsetListItem from "./InsetListItem";
import GutterlessList from "./GutterlessList";

const MainList = () => {
  return (
    <Stack gap={2}>
      <BasicList />
      <NestedList />
      <FolderList />
      <Interactive />
      <SelectedListItem />
      <AlignListItems />
      <ListControls />
      <SwitchList />
      <StickySubheader />
      <InsetListItem />
      <GutterlessList />
    </Stack>
  );
};

export default MainList;
