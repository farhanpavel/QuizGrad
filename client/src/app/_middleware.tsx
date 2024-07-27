import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const loggedinCookie = request.cookies.get("loggedin");
  const roleCookie = request.cookies.get("role");

  const loggedin = loggedinCookie ? loggedinCookie.value : undefined;
  const role = roleCookie ? roleCookie.value : undefined;

  const isLoggedIn = loggedin === "true";

  if (
    url.pathname.startsWith("/admindashboard") &&
    (!isLoggedIn || role !== "1")
  ) {
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  if (
    url.pathname.startsWith("/teacherdashboard") &&
    (!isLoggedIn || role !== "2")
  ) {
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  if (
    url.pathname.startsWith("/studentdashboard") &&
    (!isLoggedIn || role !== "3")
  ) {
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  if (url.pathname === "/" && isLoggedIn) {
    if (role === "1") {
      url.pathname = "/admindashboard";
    } else if (role === "2") {
      url.pathname = "/teacherdashboard";
    } else if (role === "3") {
      url.pathname = "/studentdashboard";
    }
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/signup" && isLoggedIn) {
    if (role === "1") {
      url.pathname = "/admindashboard";
    } else if (role === "2") {
      url.pathname = "/teacherdashboard";
    } else if (role === "3") {
      url.pathname = "/studentdashboard";
    }
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
