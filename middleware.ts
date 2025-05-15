import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

/**
 * Middleware to protect the template editing route
 * Only authenticated users can access /controltemplate?template=
 */
export async function middleware(request: NextRequest) {
  // Check if the request is for the controltemplate page with a template parameter
  const { pathname, search } = request.nextUrl;
  
  if (pathname === '/controltemplate' && search.includes('template=')) {
    // Get the authentication token
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    });
    
    // If user is NOT authenticated, redirect to login page
    if (!token) {
      // Store the original URL to redirect back after login
      const url = new URL('/auth/signin', request.url);
      url.searchParams.set('callbackUrl', request.url);
      return NextResponse.redirect(url);
    }
  }
  
  // Continue with the request for all other cases
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ['/controltemplate'],
};
