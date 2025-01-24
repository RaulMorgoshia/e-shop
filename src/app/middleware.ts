import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;

  // თუ ტოკენი არ არსებობს, გადამისამართება ლოგინის გვერდზე
  if (!token) {
    return NextResponse.redirect(new URL('/pages/user/login', req.url));
  }

  // გაგრძელება მოთხოვნის
  return NextResponse.next();
}

// Middleware იმუშავებს მხოლოდ მითითებულ როუტებზე
export const config = {
  matcher: ['/main', '/about', '/contact'], // ჩამოთვალეთ გვერდები, რომლებიც უნდა იყოს დაცული
};
