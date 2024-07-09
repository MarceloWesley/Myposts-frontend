"use server";

import { getCookies } from "../getCookies/action";

async function FindUserStats(id: string) {
  const baseUrl = process.env.URL_BACKEND;
  const token = await getCookies();

  try {
    const response = await fetch(`${baseUrl}/api/users/${id}/stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      credentials: "same-origin",
    });
    const data = await response.json();

    return data;
  } catch (error: any) {
    return error;
  }
}

export { FindUserStats };
