import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

interface RouteGroup {
  routes: string[];
  fallback: string;
}

// define frontend routes which are accessible by each role
const roleMap: Map<string, RouteGroup> = new Map();

roleMap.set("guest", {
  routes: ["/", "/signup", "/login", "/catalogue", "/support"],
  fallback: "/signup",
});

roleMap.set("navygator", {
  routes: ["/", "/catalogue", "/account"],
  fallback: "/",
});

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const role = (await cookies()).get("role")?.value ?? "guest";

  if (roleMap.get(role)?.routes.includes(path)) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(roleMap.get(role)?.fallback ?? "/signup");
  }
}
