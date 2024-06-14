import { BoxProps } from "@mui/material";

import { BasePostContent } from "./style";

const PostContent = ({ ...props }: BoxProps) => {
  return <BasePostContent {...props} />;
};

export { PostContent };
