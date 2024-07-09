"use client";

import { FC, ReactNode, SyntheticEvent, useState } from "react";

import {
  Stack,
  Tab,
  TabProps,
  TabsProps as MaterialTabsProps,
  Tabs,
} from "@mui/material";

import { TabPanel } from "./utils/tabPanel";
import { controlTabPanel } from "./utils/controlTabs";

type TabsProps = {
  tabs: TabProps[];
  children: ReactNode[];
  id: string;
  props?: MaterialTabsProps;
};

const CustomTabs: FC<TabsProps> = ({ tabs, children, id, props }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <Stack>
      <Tabs value={tabIndex} onChange={handleChange} {...props}>
        {tabs.map((tab, index) => (
          <Tab
            key={`${id}-tab-${index}`}
            {...tab}
            {...controlTabPanel({ id, index })}
          />
        ))}
      </Tabs>

      {children.map((child, index) => (
        <TabPanel
          value={tabIndex}
          index={index}
          key={`${id}-tabpanel-${index}`}
          id={id}
        >
          {child}
        </TabPanel>
      ))}
    </Stack>
  );
};

export { CustomTabs };
