import { BoxProps } from "@mui/material";

import { BasePostAction } from "./style";

const PostActions = ({ ...props }: BoxProps) => {
  return <BasePostAction {...props} />;
};

export { PostActions };
