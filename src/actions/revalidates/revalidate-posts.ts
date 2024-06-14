"use server";

import { revalidateTag } from "next/cache";

function RevalidatePost() {
  revalidateTag("get-post");
}
export { RevalidatePost };
