import { StackProps } from "@mui/material";

import { BasePostRoot } from "./style";

const PostRoot = ({ ...props }: StackProps) => {
  return <BasePostRoot {...props} />;
};

export { PostRoot };
