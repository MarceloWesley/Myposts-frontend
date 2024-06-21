import { BoxProps } from "@mui/material";

import { BaseCommentContent } from "./style";

const CommentContent = ({ ...props }: BoxProps) => {
  return <BaseCommentContent {...props} />;
};

export { CommentContent };
