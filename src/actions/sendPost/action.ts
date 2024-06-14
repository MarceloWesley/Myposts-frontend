"use server";

import { getCookies } from "../getCookies/action";

async function sendPost(formData: FormData) {
  const baseUrl = process.env.URL_BACKEND;
  const token = await getCookies();

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
    const filteredError = {
      code: error.code,
      url: error.url,
      data: error.data,
    };
    return filteredError;
  }
}

export { sendPost };
