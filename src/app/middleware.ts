import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface JWTPayload extends JwtPayload {
  role: string;
}

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
  // The middleware first takes the JWT token from the HTTP cookie,
  // then decodes it and extracts the contents of it to determine permissions

  const path = req.nextUrl.pathname;

  const cookieStore = await cookies();

  let role: string;
  if (cookieStore.has("jwt")) {
    const jwtString = cookieStore.get("jwt")?.value!;
    const jwt = jwtDecode<JWTPayload>(jwtString);
    role = jwt.role;
  } else {
    role = "guest";
  }

  if (roleMap.get(role)?.routes.includes(path)) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(roleMap.get(role)?.fallback ?? "/signup");
  }
}
