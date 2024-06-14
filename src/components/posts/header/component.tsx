import { BoxProps } from "@mui/material";

import { BasePostHeader } from "./style";

const PostHeader = ({ ...props }: BoxProps) => {
  return <BasePostHeader {...props} />;
};

export { PostHeader };
