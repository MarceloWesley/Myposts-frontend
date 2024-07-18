import { GetAllCommentsByUserId } from "@/actions/find-comment-by-user/action";
import { GetAllPostsByUserId } from "@/actions/find-post-by-user/action";
import { GetUserById } from "@/actions/find-user-by-id/action";
import { FindUserStats } from "@/actions/find-user-stats/action";
import { CommentData } from "@/components/comments-list/types";
import { PostData, User } from "@/components/posts-list/types";
import { UserActivity } from "@/components/user-activity/component";
import { UserProfileStats } from "@/components/user-profile-stats";
import { Stack } from "@mui/material";

type paramsProps = {
  params: {
    id: string;
  };
};

export default async function ProfilePage({ params }: paramsProps) {
  const user: User = await GetUserById(params.id);
  const userStats = await FindUserStats(params.id);
  const posts: PostData = await GetAllPostsByUserId(params.id, 10);
  const comments: CommentData = await GetAllCommentsByUserId(params.id, 10);

  if (user.statusCode === 404) {
    return {
      notFound: true,
    };
  }
  return (
    <Stack
      width="100%"
      margin="0 auto"
      maxWidth="850px"
      display="flex"
      flexDirection="column"
    >
      <UserProfileStats userStats={userStats} user={user} />
      <UserActivity
        posts={posts}
        comments={comments}
        user={user}
        id={params.id}
      />
    </Stack>
  );
}
