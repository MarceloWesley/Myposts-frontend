import { NextRequest, NextResponse, userAgent } from "next/server";

export function getDevice(request: NextRequest) {
  const url = request.nextUrl;

  if (request.headers) {
    const { device } = userAgent(request);
    const viewport = device.type === "mobile" ? "mobile" : "desktop";
    console.log("Viewport detectado:", viewport); // Registro para depuração
    url.searchParams.set("viewport", viewport);
    return { viewport }; // Retorne um objeto contendo o viewport
  } else {
    console.warn("Cabeçalhos indisponíveis para detecção de dispositivo");
    // Lide com cabeçalhos indisponíveis (opcional)
  }

  return NextResponse.next(); // Passe a soli
}
