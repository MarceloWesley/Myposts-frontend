"use server";

import { getCookies } from "../getCookies/action";

type GetAllPostsProps = {
  size: number;
  page?: number;
};

async function GetAllPosts({ size, page = 1 }: GetAllPostsProps) {
  const baseUrl = process.env.URL_BACKEND;
  const token = await getCookies();
  const select = {
    password: 0,
  };
  const jsonString = JSON.stringify(select);
  const base64String = btoa(jsonString);

  try {
    const response = await fetch(
      `${baseUrl}/api/posts?select=${base64String}&page=${page}&size=${size}&sort={"createdAt": -1}`,
      {
        next: {
          tags: ["get-posts"],
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        credentials: "same-origin",
      }
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    return error;
  }
}

export { GetAllPosts };
