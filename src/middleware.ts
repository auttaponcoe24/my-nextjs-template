import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ACCESS_TOKEN } from './constants';

export default async function middleware(request: NextRequest) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get(ACCESS_TOKEN)?.value;

  const { pathname } = request.nextUrl;

  const isRootPath = pathname === '/';
  const isAuthPage = ['/login', '/register'].includes(pathname);
  const requiresAuth = ['/admin', '/payment', '/order'].some((protectedPath) =>
    pathname.startsWith(protectedPath),
  );

  // if (isRootPath) {
  //   return NextResponse.redirect(new URL('/main', request.url))
  // }

  // if (accessToken) {
  //   if (isAuthPage) {
  //     return NextResponse.redirect(new URL('/main', request.url))
  //   }
  //   return NextResponse.next()
  // }

  // if (requiresAuth) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  // อนุญาตให้ดำเนินการต่อสำหรับเส้นทางอื่น
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/', // เส้นทางหลัก
    // '/login/:path*',
    // '/register/:path*',
  ],
};
