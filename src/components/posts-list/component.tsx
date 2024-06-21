"use client";
import { useState } from "react";
import { Post } from "../posts/component";
import { PostData } from "./types";
import { GetAllPosts } from "@/actions/get-All-Posts/action";
import { Box } from "@mui/material";
import { ButtonContained } from "../button/contained";

const initial_page_value = 1;
function PostsList({ posts }: { posts: PostData }) {
  const [page, setPage] = useState(initial_page_value);
  const [lPosts, setLPosts] = useState(posts.data);

  const loadMoreUsers = async () => {
    if ((posts.meta.pageCount as number) > page) {
      try {
        const apiUsers: PostData = await GetAllPosts(10, page + 1);

        setLPosts((prevPosts) => [...prevPosts, ...apiUsers.data]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Failed to load more posts", error);
      }
    } else {
      console.log("No more pages to load");
    }
  };

  return (
    <>
      {lPosts.map((post, index) => (
        <>
          <Post key={post._id} data={post} />
        </>
      ))}
      <Box display="flex" justifyContent="center">
        <ButtonContained onClick={loadMoreUsers}>Carregar mais</ButtonContained>
      </Box>
    </>
  );
}

export { PostsList };
