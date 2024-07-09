import { GetAllPosts } from "@/actions/get-All-Posts/action";
import { CreatePostDesktop } from "@/components/create-post-desktop";
import { PostsList } from "@/components/posts-list/component";
import { PostData } from "@/components/posts-list/types";
import { Stack } from "@mui/material";

export default async function HomePage() {
  const posts: PostData = await GetAllPosts(10);

  return (
    <Stack
      width="100%"
      margin="auto"
      maxWidth="850px"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <CreatePostDesktop />
      <PostsList posts={posts} onLoadMore={GetAllPosts} />
    </Stack>
  );
}
