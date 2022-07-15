import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest } from "next";

export function middleware(req: NextRequest) {
  console.log({ req: req.nextUrl });

  return NextResponse.next();
}

// export const config = {
//   matcher: "/about/:path*",
// };
