import { NextRequest, NextResponse } from "next/server";

//Los middleware son funciones que se ejecutan antes de que el servidor procese la peticion
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api/entries/")) {
    const id = req.nextUrl.pathname.replace("/api/entries/", ""); //remplazar ruta por un string vacio y queda solo el id (lo que sigue)
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

    //mensaje de error si es un id no valido
    if (!checkMongoIDRegExp.test(id)) {
      const url = req.nextUrl.clone();
      url.pathname = "/api/bad-request";
      url.search = `?message=${id} is not a valid MongoID`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/api/:path",
    "/api/entries/:path",
  ],
};
