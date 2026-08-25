import { headers } from "next/headers";
import { auth } from "./app/lib/auth";
import { NextResponse } from "next/server";

export async function proxy(request) {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
        const { pathname, search } = request.nextUrl;
        const loginUrl = new URL('/login', request.url);
        
        loginUrl.searchParams.set('callbackUrl', `${pathname}${search}`);
        
        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
  matcher: '/courses/:path+', 
};