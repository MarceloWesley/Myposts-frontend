"use server";

import { cookies } from "next/headers";
import { getCookies } from "../getCookies/action";

async function Logout() {
  const baseUrl = process.env.URL_BACKEND;
  const token = await getCookies();

  try {
    const headers = new Headers();
    const sessionHeaders =
      (await cookies().get("session-headers")?.value) || "";
    headers.append("Cookie", sessionHeaders);
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Authorization", `Bearer ${token}`);

    const response = await fetch(`${baseUrl}/api/auth/logout`, {
      method: "DELETE",
      headers,
      credentials: "same-origin",
    });

    if (response.status === 200) {
      cookies().delete("user-token");
      cookies().delete("session-headers");
    }

    const responseData = {
      status: response.status,
      statusText: response.statusText,
    };

    return responseData;
  } catch (error: any) {
    return error;
  }
}

export { Logout };
