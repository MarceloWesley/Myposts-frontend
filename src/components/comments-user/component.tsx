"use client";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Typography,
  useTheme,
} from "@mui/material";

import { useRef, useState } from "react";
import { formatDate } from "@/helper/formatDate";
import { useRouter } from "next/navigation";
import { CommentProps } from "../comments-list/types";
import { Comments } from "../comments";
import { User } from "../posts-list/types";
import { getInitials } from "@/helper/getInitials";

const CommentUser = ({ data, user }: { data: CommentProps; user: User }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const router = useRouter();
  const contentRef = useRef(null);

  return (
    <Comments.Root>
      <Comments.Header>
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
              {getInitials(user?.username)}
            </Avatar>
          </Box>
          <Typography variant="caption">{user.username}</Typography>
        </Box>
        <Typography variant="caption">{formatDate(data.createdAt)}</Typography>
      </Comments.Header>

      <Comments.Content
        sx={{
          ".MuiCollapse-root": {
            height: `${data.content.length > 100 ? "100px" : "auto"}`,
            minHeight: `${data.content.length > 100 ? "auto" : "0 !important"}`,
          },
        }}
      >
        <Box>
          <Collapse in={expanded} collapsedSize={100}>
            <Typography ref={contentRef} variant="body2">
              {data.content}
            </Typography>
          </Collapse>

          {data.content.length > 100 && (
            <Box display="flex">
              <Button
                sx={{ padding: 0 }}
                onClick={() => {
                  setExpanded((prev) => !prev);
                }}
              >
                {expanded ? "ver menos" : "ver mais"}
              </Button>
            </Box>
          )}
        </Box>
      </Comments.Content>
    </Comments.Root>
  );
};

export { CommentUser };
