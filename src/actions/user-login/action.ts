"use server";

import { cookies } from "next/headers";

async function LoginUser(formData: FormData) {
  const baseUrl = process.env.URL_BACKEND;

  try {
    const response = await fetch(`${baseUrl}/api/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "same-origin",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    cookies().set({
      name: "session-headers",
      httpOnly: true,
      value: response.headers.getSetCookie().join("; "),
    });

    cookies().set({
      name: "r-token",
      value: data.token,
      httpOnly: true,
    });

    return data;
  } catch (error: any) {
    const filteredError = {
      code: error.code,
      url: error.url,
      data: error.data,
    };
    return filteredError;
  }
}

export { LoginUser };
