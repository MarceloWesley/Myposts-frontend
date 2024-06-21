"use client";
import { GetPostById } from "@/actions/get-post-by-id/action";
import { Posts } from "@/components/posts";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Post } from "../posts-list/types";
import { useCallback, useEffect, useState } from "react";
import { getInitials } from "@/helper/getInitials";
import { formatDate } from "@/helper/formatDate";
import { Loading } from "../loading";
import { usePostIdStore } from "@/stores/post-id-store/postIdStore";

export default function PostInfo({ post }: { post: Post }) {
  // const [post, setPost] = useState<Post>();
  const theme = useTheme();
  const items = usePostIdStore((state) => state.addId);
  items(post._id);

  // const getPost = useCallback(async () => {
  //   const response = await GetPostById(id.id);
  //   if (response) {
  //     setPost(response);
  //   }
  // }, [id.id]);

  // useEffect(() => {
  //   getPost();
  // }, [getPost]);

  return (
    <>
      {post ? (
        <Posts.Root>
          <Posts.Header>
            <Box display="flex" gap={1} alignItems="center">
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                }}
              >
                <Avatar
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                    bgcolor: theme.palette.background.paper,
                    border: "solid 1px white",
                  }}
                >
                  {getInitials(post?.user.username as string)}
                </Avatar>
              </Box>
              <Typography variant="body2">{post?.user.username}</Typography>
            </Box>
            <Typography variant="caption">
              {formatDate(post?.createdAt as string)}
            </Typography>
          </Posts.Header>

          <Posts.Content>
            <Box>
              <Typography variant="h5">{post?.title}</Typography>
            </Box>
            <Box>
              <Typography variant="body2">{post?.content}</Typography>
            </Box>
          </Posts.Content>
        </Posts.Root>
      ) : (
        <Loading />
      )}
    </>
  );
}
