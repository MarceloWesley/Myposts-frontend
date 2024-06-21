import { BoxProps } from "@mui/material";

import { BaseCommentAction } from "./style";

const CommentActions = ({ ...props }: BoxProps) => {
  return <BaseCommentAction {...props} />;
};

export { CommentActions };
