"use client";
import { Posts } from "@/components/posts";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Post } from "../posts-list/types";
import { useEffect } from "react";
import { getInitials } from "@/helper/getInitials";
import { formatDate } from "@/helper/formatDate";
import { Loading } from "../loading";
import { usePostIdStore } from "@/stores/post-id-store/postIdStore";

export default function PostInfo({ post }: { post: Post }) {
  const theme = useTheme();
  const items = usePostIdStore((state) => state.addId);
  const isValidPost =
    post.statusCode !== 401 && post.statusCode !== 500 && post !== null;

  useEffect(() => {
    items(post._id);
  }, [post]);

  return (
    <>
      {isValidPost ? (
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
