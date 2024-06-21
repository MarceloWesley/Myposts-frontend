"use server";

import { revalidateTag } from "next/cache";

async function sendComment(formData: FormData) {
  const baseUrl = process.env.URL_BACKEND;

  try {
    const response = await fetch(`${baseUrl}/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "same-origin",
      body: JSON.stringify(formData),
    });

    const responseData = {
      status: response.status,
      statusText: response.statusText,
    };

    return responseData;
  } catch (error: any) {
    return error;
  } finally {
    revalidateTag("get-comments-by-post");
  }
}

export { sendComment };
