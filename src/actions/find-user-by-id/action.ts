"use server";

import { getCookies } from "../getCookies/action";

async function GetUserById(id: string) {
  const baseUrl = process.env.URL_BACKEND;
  const token = await getCookies();
  const select = {
    password: 0,
  };
  const jsonString = JSON.stringify(select);
  const base64String = btoa(jsonString);

  try {
    const response = await fetch(
      `${baseUrl}/api/users/${id}?select=${base64String}`,
      {
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

export { GetUserById };
