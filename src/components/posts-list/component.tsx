"use client";
import { useEffect, useState } from "react";
import { Post } from "../posts/component";
import { PostData } from "./types";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useErrorHandling } from "@/hooks/error-handling";
import { Loading } from "../loading";
import { produce } from "immer";

const initial_page_value = 1;

function PostsList({
  posts,
  onLoadMore,
}: {
  posts: PostData;
  onLoadMore: (size: number, page: number) => Promise<PostData>;
}) {
  const [page, setPage] = useState(initial_page_value);
  const [lPosts, setLPosts] = useState(posts);
  const { errorValidation } = useErrorHandling();
  const { ref, inView } = useInView();

  const loadMore = async () => {
    if ((posts.meta.pageCount as number) > page) {
      try {
        const newData: PostData = await onLoadMore(10, page + 1);
        setLPosts(
          produce(lPosts, (draft) => {
            draft.data.push(...newData.data);
          })
        );
        setPage((prevPage) => prevPage + 1);
      } catch (error: any) {
        errorValidation(error);
      }
    }
  };

  useEffect(() => {
    if (posts.data) {
      setLPosts(
        produce(posts, (draft) => {
          draft.data = [...draft.data];
        })
      );
    }
  }, [posts?.data]);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  if (!posts?.data) {
    return (
      <Box display="flex" justifyContent="center">
        <Loading />
      </Box>
    );
  }

  return (
    <>
      {lPosts.data.map((post, index) => (
        <Post key={post._id} data={post} />
      ))}
      {(posts.meta.pageCount as number) > page && (
        <Box ref={ref} display="flex" justifyContent="center">
          <Typography>Loading..</Typography>
        </Box>
      )}
    </>
  );
}

export { PostsList };
