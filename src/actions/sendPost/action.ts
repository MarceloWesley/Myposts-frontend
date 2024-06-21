"use server";

import { revalidateTag } from "next/cache";

async function sendPost(formData: FormData) {
  const baseUrl = process.env.URL_BACKEND;

  try {
    const response = await fetch(`${baseUrl}/api/posts`, {
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
    revalidateTag("get-posts");
  }
}

export { sendPost };
