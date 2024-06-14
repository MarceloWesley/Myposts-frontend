"use client";
import { GetAllPosts } from "@/actions/get-All-Posts/action";
import { useCallback, useEffect, useState } from "react";
import { PostData } from "./types";
import { Post } from "../posts/component";

function PostsList() {
  const [posts, setPosts] = useState<PostData>();

  const getAllPosts = useCallback(async () => {
    const response = await GetAllPosts();
    if (response) {
      setPosts(response);
    }
  }, []);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {posts?.data?.map((post, index) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
}

export { PostsList };
