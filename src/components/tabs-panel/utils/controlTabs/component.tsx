type ControlTabsProps = {
  id: string;
  index: number;
};

function controlTabPanel({ id, index }: ControlTabsProps) {
  return {
    id: `${id}-tab-${index}`,
    "aria-controls": `${id}-tabpanel-${index}`,
  };
}

export { controlTabPanel };
