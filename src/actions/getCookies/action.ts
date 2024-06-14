"use server";

import { cookies } from "next/headers";

async function getCookies() {
  const token = await cookies().get("user-token")?.value;
  return token ?? "";
}

export { getCookies };
