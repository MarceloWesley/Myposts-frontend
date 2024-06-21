import { GetAllCommentsByPost } from "@/actions/get-all-post-comments/action";
import { GetPostById } from "@/actions/get-post-by-id/action";
import { CommentsList } from "@/components/comments-list/component";
import { CommentData } from "@/components/comments-list/types";
import { CreateCommentDesktop } from "@/components/create-comment-desktop";
import PostInfo from "@/components/posts-detail/component";
import { Post } from "@/components/posts-list/types";
import { Divider, Stack } from "@mui/material";

type paramsProps = {
  params: {
    id: string;
  };
};

export default async function PostDetails({ params }: paramsProps) {
  const postResponse: Post = await GetPostById(params.id);
  const commentResponse: CommentData = await GetAllCommentsByPost(params.id);

  return (
    <Stack
      width="100%"
      maxWidth="850px"
      display="flex"
      flexDirection="column"
      gap={4}
      margin="0 auto"
    >
      <PostInfo post={postResponse} />
      <Divider />
      <CreateCommentDesktop />
      <CommentsList comments={commentResponse} />
    </Stack>
  );
}
