import { Stack } from "@mui/material";
import React from "react";
import BasicTab from "./BasicTab";
import WrappedLabels from "./WrappedLabels";
import ColoredTab from "./ColoredTab";
import DisabledTab from "./DisabledTab";
import FullWidthTab from "./FullWidthTab";
import Centered from "./Centered";
import ScrollableTabs from "./ScrollableTabs";
import PreventScrollButtons from "./PreventScrollButtons";
import VerticalTabs from "./VerticalTabs";
import NavTabs from "./NavTabs";
import IconTabs from "./IconTabs";
import KeyboardNavigation from "./KeyboardNavigation";

const MainTabs = () => {
  return (
    <Stack gap={3}>
      <BasicTab />
      <WrappedLabels />
      <ColoredTab />
      <DisabledTab />
      <FullWidthTab />
      <Centered />
      <ScrollableTabs />
      <PreventScrollButtons />
      <VerticalTabs />
      <NavTabs />
      <IconTabs />
      <KeyboardNavigation />
    </Stack>
  );
};

export default MainTabs;
