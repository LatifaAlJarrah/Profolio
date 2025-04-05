// import { handlers } from "@/auth";

// export const { GET, POST } = handlers;

import NextAuth from "next-auth";

const handlers = NextAuth({authOptions} );

export { handlers as GET, handlers as POST };