"use server";

import { cookies } from "next/headers";

async function LoginUser(formData: FormData) {
  const baseUrl = process.env.URL_BACKEND;

  try {
    const response = await fetch(`${baseUrl}/api/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    cookies().set({
      name: "user-token",
      value: data.token,
      httpOnly: true,
      path: "/",
    });

    return data;
  } catch (error: any) {
    return error.json();
  }
}

export { LoginUser };
