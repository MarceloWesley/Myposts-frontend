import { GetAllPosts } from "@/actions/get-All-Posts/action";
import { CreatePostDesktop } from "@/components/create-post-desktop";
import { InfiniteScroll } from "@/components/infinite-scroll/component";
import { PostsList } from "@/components/posts-list/component";
import { PostData } from "@/components/posts-list/types";
import { Post } from "@/components/posts/component";
import { Box, Stack } from "@mui/material";

export default async function HomePage() {
  const posts: PostData = await GetAllPosts({ size: 10 });
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
      <InfiniteScroll
        pageSize={10}
        onLoadMore={GetAllPosts}
        initialData={posts}
        Element={Post}
      ></InfiniteScroll>
    </Stack>
  );
}
