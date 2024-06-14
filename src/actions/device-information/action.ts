import { NextRequest, NextResponse, userAgent } from "next/server";

export function getDevice(request: NextRequest) {
  const url = request.nextUrl;
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  console.log(viewport);
  url.searchParams.set("viewport", viewport);
  return NextResponse.rewrite(url);
}
