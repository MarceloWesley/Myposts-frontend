"use client";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { Posts } from ".";
import { Chat } from "@phosphor-icons/react";
import { useRef } from "react";
import { Post as PostsProps } from "../posts-list/types";
import { formatDate } from "@/helper/formatDate";
import { getInitials } from "@/helper/getInitials";
import { useRouter } from "next/navigation";

const Post = ({ data }: { data: PostsProps }) => {
  const theme = useTheme();
  const router = useRouter();
  const contentRef = useRef(null);

  return (
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
              {getInitials(data.user.username)}
            </Avatar>
          </Box>
          <Typography variant="caption">{data.user.username}</Typography>
        </Box>
        <Typography variant="caption">{formatDate(data.createdAt)}</Typography>
      </Posts.Header>

      <Posts.Content
        sx={{
          ".MuiCollapse-root": {
            height: `${data.content.length > 100 ? "100px" : "auto"}`,
            minHeight: `${data.content.length > 100 ? "auto" : "0 !important"}`,
          },
        }}
      >
        <Box>
          <Typography variant="h6">{data.title}</Typography>
        </Box>

        <Box>
          <Collapse collapsedSize={100}>
            <Typography ref={contentRef} variant="body2">
              {data.content}
            </Typography>
          </Collapse>

          {data.content.length > 100 && (
            <Box display="flex">
              <Button
                sx={{ padding: 0 }}
                onClick={() => router.push(`/post/${data._id}/comments`)}
              >
                Ver mais
              </Button>
            </Box>
          )}
        </Box>
      </Posts.Content>

      <Posts.Actions>
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => router.push(`/post/${data._id}/comments`)}
        >
          <Chat color={theme.palette.primary.dark} size={26} />
        </IconButton>
      </Posts.Actions>
    </Posts.Root>
  );
};

export { Post };
