import { StackProps } from "@mui/material";

import { BaseCommentRoot } from "./style";

const CommentRoot = ({ ...props }: StackProps) => {
  return <BaseCommentRoot {...props} />;
};

export { CommentRoot };
