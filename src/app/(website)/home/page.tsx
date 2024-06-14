import { PostsList } from "@/components/posts-list/component";
import { Stack } from "@mui/material";

export default function HomePage() {
  return (
    <Stack
      width="100%"
      maxWidth="500px"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <PostsList />
    </Stack>
  );
}
