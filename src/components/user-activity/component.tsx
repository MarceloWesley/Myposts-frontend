"use client";
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { CommentData } from "../comments-list/types";
import { PostData, User } from "../posts-list/types";
import { PostUser } from "../posts-user";
import { CommentUser } from "../comments-user";
import { useErrorHandling } from "@/hooks/error-handling";
import { useInView } from "react-intersection-observer";
import { GetAllPostsByUserId } from "@/actions/find-post-by-user/action";
import { GetAllCommentsByUserId } from "@/actions/find-comment-by-user/action";
import { CustomTabs } from "../tabs-panel";

const initial_page_value = 1;

function UserActivity({
  posts,
  comments,
  user,
  id,
}: {
  posts: PostData;
  comments: CommentData;
  user: User;
  id?: string;
}) {
  const [postPage, setPostPage] = useState(initial_page_value);
  const [commentPage, setCommentPage] = useState(initial_page_value);
  const [lPosts, setLPosts] = useState(posts.data);
  const [lComments, setLComments] = useState(comments.data);
  const { errorValidation } = useErrorHandling();
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  const tabs = [{ label: "Meus posts" }, { label: "Meus comentários" }];

  const loadMorePosts = async () => {
    if ((posts.meta.pageCount as number) > postPage) {
      try {
        const apiUsers: PostData = await GetAllPostsByUserId(
          id as string,
          10,
          postPage + 1
        );

        setLPosts((prevPosts) => [...prevPosts, ...apiUsers.data]);
        setPostPage((prevPage) => prevPage + 1);
      } catch (error: any) {
        errorValidation(error);
      }
    } else {
      return;
    }
  };

  const loadMoreComments = async () => {
    if ((comments.meta.pageCount as number) > commentPage) {
      try {
        const apiUsers: CommentData = await GetAllCommentsByUserId(
          id as string,
          10,
          commentPage + 1
        );

        setLComments((prevComments) => [...prevComments, ...apiUsers.data]);
        setCommentPage((prevPage) => prevPage + 1);
      } catch (error: any) {
        errorValidation(error);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      loadMoreComments();
    }
  }, [inView2]);

  return (
    <CustomTabs id="posts" tabs={tabs}>
      <Stack display="flex" flexDirection="column" gap={3}>
        {lPosts.map((post, index) => (
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            key={post._id}
            ref={ref}
          >
            <PostUser data={post} user={user} />
          </Box>
        ))}
      </Stack>
      <Stack display="flex" flexDirection="column" gap={3}>
        {lComments.map((comment, index) => (
          <Box key={comment._id} ref={ref2}>
            <CommentUser data={comment} user={user} />
          </Box>
        ))}
      </Stack>
    </CustomTabs>
  );
}

export { UserActivity };
