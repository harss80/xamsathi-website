import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = Boolean(request.cookies.get('xamsathi_token')?.value)
    || Boolean(request.cookies.get('xamsathi_auth')?.value)
    || Boolean(request.cookies.get('eduman_auth')?.value)
    || Boolean(request.cookies.get('token')?.value);
  const { pathname, search } = request.nextUrl;

  // Protect dashboard routes for unauthenticated users
  if (pathname.startsWith('/dashboard')) {
    if (!isAuthenticated) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      const returnTo = pathname + (search || '');
      url.searchParams.set('next', returnTo);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Redirect authenticated users away from auth pages
  if (pathname === '/login' || pathname === '/signup' || pathname === '/register') {
    if (isAuthenticated) {
      const url = request.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
