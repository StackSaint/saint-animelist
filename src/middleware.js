import { withAuth } from "next-auth/middleware";

// Export the middleware function as default
export default withAuth(
    function middleware(req) {
        return req;
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

// Configure which routes to protect
export const config = {
    matcher: ["/users/dashboard/:path*"]
}