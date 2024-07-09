"use server";

import { getCookies } from "../getCookies/action";

async function GetAllCommentsByPost(
  id: string,
  size: number,
  page: number = 1
) {
  const baseUrl = process.env.URL_BACKEND;
  const token = await getCookies();

  try {
    const response = await fetch(
      `${baseUrl}/api/posts/${id}/comments?sort={"createdAt": -1}&size=${size}&page=${page}`,
      {
        next: {
          tags: ["get-comments-by-post"],
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

export { GetAllCommentsByPost };
