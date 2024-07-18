"use client";
import { CommentData } from "./types";
import { Comment } from "../comments/component";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Typography } from "@mui/material";
import { produce } from "immer";
import { useErrorHandling } from "@/hooks/error-handling";
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
  const [lComments, setLComments] = useState(comments);
  const { errorValidation } = useErrorHandling();
  const { ref, inView } = useInView();

  const loadMoreComments = async () => {
    if ((comments.meta.pageCount as number) > page) {
      try {
        const newData: CommentData = await onLoadMore(id, 10, page + 1);
        setLComments(
          produce(lComments, (draft) => {
            draft.data.push(...newData.data);
            draft.meta = newData.meta;
          })
        );
        setPage((prevPage) => prevPage + 1);
      } catch (error: any) {
        errorValidation(error);
      }
    }
  };

  useEffect(() => {
    if (comments.data) {
      setPage(1);
      setLComments(
        produce(comments, (draft) => {
          (draft.data = [...draft.data]), (draft.meta = draft.meta);
        })
      );
    }
  }, [comments.data]);

  useEffect(() => {
    if (inView) {
      loadMoreComments();
    }
  }, [inView]);

  return (
    <>
      {lComments.data.map((comment, index) => (
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
