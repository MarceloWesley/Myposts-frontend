import { BoxProps } from "@mui/material";

import { BaseCommentHeader } from "./style";

const CommentHeader = ({ ...props }: BoxProps) => {
  return <BaseCommentHeader {...props} />;
};

export { CommentHeader };
