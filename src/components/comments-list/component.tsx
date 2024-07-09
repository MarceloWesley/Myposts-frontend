"use client";
import { CommentData } from "./types";
import { Comment } from "../comments/component";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Typography } from "@mui/material";
const initial_page_value = 1;

function CommentsList({
  comments,
  id,
  onLoadMore,
}: {
  comments: CommentData;
  id: string;
  onLoadMore: (id: string, size: number, page: number) => Promise<CommentData>;
}) {
  const [page, setPage] = useState(initial_page_value);
  const [lComments, setLComments] = useState(comments.data);
  const { ref, inView } = useInView();

  const loadMoreComments = async () => {
    if ((comments.meta.pageCount as number) > page) {
      try {
        const apiUsers: CommentData = await onLoadMore(id, 10, page + 1);

        setLComments((prevPosts) => [...prevPosts, ...apiUsers.data]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Failed to load more posts", error);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (comments) {
      setLComments(comments.data);
    }
  }, [comments.data]);

  useEffect(() => {
    if (inView) {
      loadMoreComments();
    }
  }, [inView]);

  return (
    <>
      {lComments.map((comment, index) => (
        <Comment key={comment._id} data={comment} />
      ))}
      {(comments.meta.pageCount as number) > page && (
        <Box ref={ref} display="flex" justifyContent="center">
          <Typography>Loading..</Typography>
        </Box>
      )}
    </>
  );
}

export { CommentsList };
